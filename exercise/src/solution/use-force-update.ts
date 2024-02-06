import { useCallback, useState } from "react";

export function useForceUpdate() {
  let [, setState] = useState(Symbol());
  return useCallback(() => setState(Symbol()), []);
}
