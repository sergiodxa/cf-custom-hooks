import { useEffect, useRef } from "react";

export function usePrevious<Value>(value: Value) {
  let ref = useRef(value);

  useEffect(
    function saveValue() {
      ref.current = value;
    },
    [value],
  );

  return ref.current;
}
