import { useRef } from "react";
import { usePrevious } from "./custom-hooks";

/**
 * Returns an object containing the `changed` property (whether the dependencies array passed in has changed
 * or not) and `stableDeps`, which is the same array if has not changed.
 *
 * If `singleDep` is true, `deps` will be considered a single dependency that may change and not an array.
 * Otherwise `deps` will always be considered to have changed when it is not an array. An optional function
 * to determine the element's equality may be provided.
 */
const useDependencyList = (deps, singleDep = false, isEqualFn = Object.is) => {
  const prev = usePrevious(deps);
  const ref = useRef();

  const changed = singleDep
    ? !isEqualFn(deps, prev)
    : !Array.isArray(deps) ||
      deps.length !== prev?.length ||
      !deps.every((val, index) => isEqualFn(val, prev?.[index]));

  if (changed) {
    ref.current = deps;
  }

  return { changed, stableDeps: ref.current };
};

export default useDependencyList;
