import { useEffect, useCallback, useRef, useReducer } from "react";
import { useMountStatus, useDependencyList } from "hooks";

// init state functions
const initFromLength = (len) => {
  if (len === undefined) {
    return {
      data: null,
      error: null,
      isLoading: false,
    };
  }

  return {
    data: new Array(len).fill(null),
    error: new Array(len).fill(null),
    isLoading: new Array(len).fill(false),
  };
};

const initFromResource = (resource) => {
  const length = Array.isArray(resource) ? resource.length : undefined;
  return initFromLength(length);
};

// reducer
const fetchReducer = (state, action) => {
  const { length, index } = action.payload;

  const isInconsistent = state.isLoading?.length !== length;
  if (isInconsistent) {
    state = initFromLength(length);
  }

  const update =
    index !== undefined
      ? // update state as array
        (value, prev) => {
          const copy = [...prev];
          copy[index] = value;
          return copy;
        }
      : // update state as a single value
        (value) => value;

  switch (action.type) {
    case "loading":
      return {
        ...state,
        isLoading: update(true, state.isLoading),
      };

    case "done":
      const isLoading = update(false, state.isLoading);

      if (action.error) {
        const err = action.payload.value;
        if (err.name === "AbortError") {
          return {
            ...state,
            isLoading,
          };
        }

        return {
          data: update(null, state.data),
          error: update(err, state.error),
          isLoading,
        };
      }

      const data = action.payload.value;
      return {
        data: update(data, state.data),
        error: update(null, state.error),
        isLoading,
      };

    default:
      throw new TypeError(`Unknown dispatch action type "${action.type}".`);
  }
};

const validateInput = (resrc, init) => {
  const isResrcArray = Array.isArray(resrc);
  const isInitArray = Array.isArray(init);

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

  return [isResrcArray, isInitArray];
};

/**
 * Returns an object containing the `data`, `error` and `isLoading` states of the fetch operation, along
 * with the `doFetch` and `abortFetch` functions to run and abort the fetch.
 *
 * `resource` and `initObj` are the url for the fetch and the request init object respectively. They
 * can also be factory functions to create such objects and will be invoked upon fetch. They can also be
 * arrays containing such entries for multiple requests.
 *
 * Defaults of the optional parameter to specify settings for the operation are
 * ```
 * {
 *   asEffect = false,
 *   throwError = true,
 *   usingState = true,
 *   abortOnUnmount = true,
 *   abortBeforeRefetch = true,
 * }
 * ```
 *
 * Note: `doFetch` will change if `resource`, `initObj`, `abortBeforeRefetch`, `throwError` or `usingState`
 * is changed. `doFetch` will be run as an effect if `asEffect` is true and `asEffect` or `doFetch` was changed
 * (or after the first render).
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
 *     body: JSON.stringify(data),
 *     credentials: "include",
 *   };
 * }, [data]);
 *
 * const { doFetch: postData } = useFetch(url, requestInit, {
 *   usingState: false, // avoid setting states unnecessarily when they are not used
 * });
 * // ...
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
 * // (`data`, `error` and `isLoading` states will still be updated if `usingState` is true)
 * const { data, error, isLoading, doFetch } = useFetch();
 * // ...
 * doFetch(url, { credentials: "include" }).then((data) => {...});
 * // ...
 * doFetch([url1, url2], [{ credentials: "include" }, {}]).then((results) => {...});
 * ```
 */
const useFetch = (
  resource,
  initObj,
  {
    asEffect = false,
    throwError = true,
    usingState = true,
    abortOnUnmount = true,
    abortBeforeRefetch = true,
  } = {}
) => {
  const [isResourceArray, isInitObjArray] = validateInput(resource, initObj);

  // stabilize reference to use in react's dependency arrays later, in case inputs are arrays
  resource = useDependencyList(resource).stable;
  initObj = useDependencyList(initObj).stable;

  // fetch state
  const [{ data, error, isLoading }, dispatch] = useReducer(
    fetchReducer,
    resource,
    initFromResource
  );

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
    async (resrc, init) => {
      // validate input
      const [isResrcArray, isInitArray] = (() => {
        if (resrc === undefined && init === undefined) {
          // if both default, use inputs from useFetch
          resrc = resource;
          init = initObj;
          return [isResourceArray, isInitObjArray];
        }

        // only need to validate if at least one non-default input is used
        resrc ??= resource;
        init ??= initObj;
        return validateInput(resrc, init);
      })();

      // abort logic
      abortBeforeRefetch && abortFetch();
      abortCtrlRef.current ??= new AbortController();

      // function to create a request init object, to be used later
      const getInit = (init) => {
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
        resrc,
        init,
        length,
        index,
        initPrecomputed = false
      ) => {
        if (typeof resrc === "function") {
          resrc = resrc();
        }
        if (!initPrecomputed) {
          init = getInit(init);
        }

        // start loading
        if (usingState && isMounted()) {
          dispatch({ type: "loading", payload: { length, index } });
        }

        try {
          // make request
          const response = await fetch(resrc, init);

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

          // set data state if succeed
          if (usingState && isMounted()) {
            dispatch({ type: "done", payload: { length, index, value: data } });
          }

          return data; // to be used as result of promise
        } catch (err) {
          // set error state
          if (usingState && isMounted()) {
            dispatch({
              type: "done",
              error: true,
              payload: { length, index, value: err },
            });
          }

          if (throwError) {
            throw err;
          }
        }
      };

      if (isResrcArray) {
        const length = resrc.length;

        // if the `init` input is not an array, we create one common init object for all requests
        const commonInit = isInitArray ? null : getInit(init);
        const toFetchPromise = commonInit
          ? (res, index) => fetchElement(res, commonInit, length, index, true)
          : (res, index) => fetchElement(res, init[index], length, index);

        // resolves to an array of objects describing the outcome of each fetch
        return Promise.allSettled(resrc.map(toFetchPromise));
      }

      // when input is a single fetch request
      return fetchElement(resrc, init);
    },
    [
      resource,
      initObj,
      isResourceArray,
      isInitObjArray,
      abortBeforeRefetch,
      throwError,
      usingState,
      isMounted,
      abortFetch,
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

export { useFetch };
