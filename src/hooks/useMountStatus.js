import { useCallback, useEffect, useRef } from "react";

/**
 * Returns an object containing the `isMounted` function that returns a boolean on call to check whether the component is in the mounted phase.
 */
const useMountStatus = () => {
  const ref = useRef(true);

  useEffect(() => {
    return () => {
      ref.current = false;
    };
  }, []);

  const isMounted = useCallback(() => ref.current, []);

  return { isMounted };
};

export { useMountStatus };
