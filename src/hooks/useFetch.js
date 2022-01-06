import { useEffect, useState, useCallback, useRef } from "react";
import { useMountStatus } from "./custom-hooks";

/**
 * Returns an object containing the `data`, `error` and `isLoading` states of the fetch operation, along
 * with the `doFetch` and `abortFetch` functions to run and abort the fetch.
 *
 * `resource` and `init` are the url for the fetch and the request init object respectively. They can also
 * be factory functions to create such objects and will be invoked upon fetch.
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
 * Note: `doFetch` will change if `resource`, `init`, `abortBeforeRefetch` or `throwError` is changed. `doFetch`
 * will be run as an effect if `asEffect` or `doFetch` is changed (or on mount) and `asEffect` is true.
 *
 * Example usage:
 * ```
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
 * ```
 */
const useFetch = (
  resource,
  init,
  {
    asEffect = false,
    abortOnUnmount = true,
    abortBeforeRefetch = true,
    throwError = true,
  } = {}
) => {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

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
  const doFetch = useCallback(async () => {
    abortBeforeRefetch && abortFetch();
    abortCtrlRef.current ??= new AbortController();

    // start loading
    isMounted() && setIsLoading(true);

    try {
      // make request
      const resourceVal =
        typeof resource === "function" ? resource() : resource;
      const initVal = typeof init === "function" ? init() : init;

      const response = await fetch(resourceVal, {
        ...initVal,
        signal: abortCtrlRef.current.signal,
      });

      // get data from response
      const isJson = response.headers
        .get("Content-Type")
        ?.includes("application/json");
      const data = await (isJson ? response.json() : response.text());

      if (!response.ok) {
        // HTTP error
        const message = !isJson ? data : data.message ? ` ${data.message}` : "";
        throw new Error(`[HTTP ${response.status}]` + message);
      }

      if (isMounted()) {
        // set the states if succeed
        setData(data);
        setError(null);
      }

      return data;
    } catch (err) {
      if (err.name !== "AbortError" && isMounted()) {
        // set error except when fetch is aborted
        setData(null);
        setError(err);
      }

      if (throwError) {
        throw err;
      }
    } finally {
      // finish loading
      isMounted() && setIsLoading(false);
    }
  }, [resource, init, abortBeforeRefetch, abortFetch, isMounted, throwError]);

  // fetch as an effect
  useEffect(() => {
    if (asEffect) {
      doFetch();
    }
  }, [asEffect, doFetch]);

  return { data, error, isLoading, doFetch, abortFetch };
};

export default useFetch;
