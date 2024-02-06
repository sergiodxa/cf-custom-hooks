import { useEffect, useRef } from "react";

interface Callback {
  (): void;
}

export function useInterval(ms: number, callback: Callback) {
  let ref = useRef<Callback>();

  useEffect(() => {
    ref.current = callback;
  }, [callback]);

  useEffect(
    function setupInterval() {
      let timerId = setInterval(() => ref.current?.(), ms);

      return function clearInterval() {
        window.clearInterval(timerId);
      };
    },
    [ms],
  );
}
