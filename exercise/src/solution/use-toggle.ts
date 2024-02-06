import { useCallback, useMemo, useState } from "react";

export function useToggle(initialState = false) {
  let [state, setState] = useState(initialState);

  let toggle = useCallback(
    function createToggle() {
      setState((current) => {
        return !current;
      });
    },
    [setState],
  );

  return useMemo(() => {
    return [state, toggle] as const;
  }, [state, toggle]);
}
