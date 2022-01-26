import { useEffect, useRef } from "react";

/**
 * Returns the value passed in from the previous render.
 */
const usePrevious = (value) => {
  const ref = useRef();

  useEffect(() => {
    ref.current = value;
  });

  return ref.current;
};

export { usePrevious };
