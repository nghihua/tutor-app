import { useEffect, useState, useCallback, useRef } from "react";
import { useMountStatus, useDependencyList } from "./custom-hooks";

/**
 * Returns an object containing the `data`, `error` and `isLoading` states of the fetch operation, along
 * with the `doFetch` and `abortFetch` functions to run and abort the fetch.
 *
 * `resource` and `requestInit` are the url for the fetch and the request init object respectively. They
 * can also be factory functions to create such objects and will be invoked upon fetch. They can also be
 * arrays containing such entries for multiple requests.
 *
 * An optional object can be passed to `useFetch` to specify settings for the operation. Defaults are
 * ```
 * {
 *   asEffect = false,
 *   abortOnUnmount = true,
 *   abortBeforeRefetch = true,
 *   throwError = true,
 * }
 * ```
 *
 * Note: `doFetch` will change if `resource`, `requestInit`, `abortBeforeRefetch` or `throwError` is changed.
 * `doFetch` will be run as an effect if `asEffect` or `doFetch` is changed (or on the first render) and
 * `asEffect` is true.
 *
 * Example usage:
 * ```
 * // Wrap the request init in a `useCallback` so that it does not change every render.
 * const requestInit = useCallback(() => {
 *   return {
 *     method: "POST",
 *     headers: {
 *       "Content-Type": "application/json",
 *     },
 *     credentials: "include",
 *     body: JSON.stringify(data),
 *   };
 * }, [data]);
 *
 * const { doFetch: postData } = useFetch(url, requestInit);
 * ...
 * postData();
 *
 * ...
 *
 * // Multiple requests at once and automatically run as an effect.
 * const {
 *   data: [data1, data2],
 * } = useFetch([url1, url2], undefined, { asEffect: true, throwError: false });
 *
 * ...
 *
 * // Use `doFetch` and pass in fetch info directly.
 * // (`data`, `error` and `isLoading` states will still be updated)
 * const { data, error, isLoading, doFetch } = useFetch();
 * ...
 * doFetch(url, { credentials: "include" }).then((data) => {...});
 * ...
 * doFetch([url1, url2], [{ credentials: "include" }, {}]).then((results) => {...});
 * ```
 */
const useFetch = (
  resource,
  requestInit,
  {
    asEffect = false,
    abortOnUnmount = true,
    abortBeforeRefetch = true,
    throwError = true,
  } = {}
) => {
  const isResrcArray = Array.isArray(resource);
  const isInitArray = Array.isArray(requestInit);

  // stabilize reference to use in react's dependency arrays later in case inputs are arrays
  resource = useDependencyList(resource, !isResrcArray).stableDeps;
  requestInit = useDependencyList(requestInit, !isInitArray).stableDeps;

  // fetch states
  const initNull = () =>
    isResrcArray ? new Array(resource.length).fill(null) : null;
  const initFalse = () =>
    isResrcArray ? new Array(resource.length).fill(false) : false;

  const [data, setData] = useState(initNull);
  const [error, setError] = useState(initNull);
  const [isLoading, setIsLoading] = useState(initFalse);

  const abortCtrlRef = useRef(null);
  const { isMounted } = useMountStatus();

  // abort function
  const abortFetch = useCallback(() => {
    if (abortCtrlRef.current) {
      abortCtrlRef.current.abort();
      abortCtrlRef.current = null;
    }
  }, []);

  // abort on unmount
  useEffect(() => {
    if (abortOnUnmount) {
      return abortFetch;
    }
  }, [abortOnUnmount, abortFetch]);

  // main fetch function
  const doFetch = useCallback(
    (resrc = resource, init = requestInit) => {
      const isResrcArray = Array.isArray(resrc);
      const isInitArray = Array.isArray(init);

      // validate input
      if (isInitArray && !isResrcArray) {
        throw new TypeError(
          "If `init` is an array then `resource` must also be an array."
        );
      }
      if (isResrcArray && isInitArray && resrc.length !== init.length) {
        throw new TypeError(
          "`resource` and `init` must be arrays of the same length."
        );
      }

      // abort logic
      abortBeforeRefetch && abortFetch();
      abortCtrlRef.current ??= new AbortController();

      // function to create a request init object, to be used later
      const getRequestInit = (init) => {
        if (typeof init === "function") {
          init = init();
        }
        return {
          ...init,
          signal: abortCtrlRef.current.signal,
        };
      };

      // function to fetch a single request
      const fetchElement = async (
        _resrc,
        _init,
        _setData,
        _setError,
        _setIsLoading,
        initPrecomputed = false
      ) => {
        if (typeof _resrc === "function") {
          _resrc = _resrc();
        }
        if (!initPrecomputed) {
          _init = getRequestInit(_init);
        }

        // start loading
        isMounted() && _setIsLoading(true);

        try {
          // make request
          const response = await fetch(_resrc, _init);

          // get data from response
          const isJson = response.headers
            .get("Content-Type")
            ?.includes("application/json");
          const data = await (isJson ? response.json() : response.text());

          if (!response.ok) {
            // HTTP error
            const message = !isJson
              ? data
              : data.message
              ? ` ${data.message}`
              : "";
            throw new Error(`[HTTP ${response.status}]` + message);
          }

          if (isMounted()) {
            // set the states if succeed
            _setData(data);
            _setError(null);
          }

          return data;
        } catch (err) {
          if (err.name !== "AbortError" && isMounted()) {
            // set error except when fetch is aborted
            _setData(null);
            _setError(err);
          }

          if (throwError) {
            throw err;
          }
        } finally {
          // finish loading
          isMounted() && _setIsLoading(false);
        }
      };

      if (isResrcArray) {
        // set up the appropriate state setters for each element of the input array
        const arraySetter = (setter, index) => {
          return (value) => {
            setter((arr) => [
              ...arr.slice(0, index),
              value,
              ...arr.slice(index + 1),
            ]);
          };
        };
        const dataSetter = (index) => arraySetter(setData, index);
        const errorSetter = (index) => arraySetter(setError, index);
        const isLoadingSetter = (index) => arraySetter(setIsLoading, index);

        // create a single common init object for all requests if the `init` input is not an array
        const precomputedInit = isInitArray ? null : getRequestInit(init);
        // different callbacks for whether the init object is precomputed or not
        const mapCallback = precomputedInit
          ? (res, index) =>
              fetchElement(
                res,
                precomputedInit,
                dataSetter(index),
                errorSetter(index),
                isLoadingSetter(index),
                true
              )
          : (res, index) =>
              fetchElement(
                res,
                init[index],
                dataSetter(index),
                errorSetter(index),
                isLoadingSetter(index)
              );

        // return a promise that resolves to an array of objects that each describes the outcome of each
        // fetch
        return Promise.allSettled(resrc.map(mapCallback));
      }

      // return fetch promise for when input is a single fetch request
      return fetchElement(resrc, init, setData, setError, setIsLoading);
    },
    [
      resource,
      requestInit,
      abortBeforeRefetch,
      abortFetch,
      isMounted,
      throwError,
    ]
  );

  // fetch as an effect
  useEffect(() => {
    if (asEffect) {
      doFetch();
    }
  }, [asEffect, doFetch]);

  return { data, error, isLoading, doFetch, abortFetch };
};

export default useFetch;
