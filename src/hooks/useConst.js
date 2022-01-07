import { useRef } from "react";

/**
 * Returns the initial value or the value computed from the initial function passed in on the first render.
 */
const useConst = (initialValue) => {
  const ref = useRef();

  ref.current ??= {
    value: typeof initialValue === "function" ? initialValue() : initialValue,
  };

  return ref.current.value;
};

export default useConst;
