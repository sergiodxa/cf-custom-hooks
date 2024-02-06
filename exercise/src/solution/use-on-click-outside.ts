import type { RefObject } from "react";

import { useEffect } from "react";

type Callback = (event: MouseEvent | TouchEvent) => void;

export function useOnClickOutside<Element extends HTMLElement>(
  ref: RefObject<Element>,
  callback: Callback,
) {
  useEffect(() => {
    document.addEventListener("mousedown", listener);
    document.addEventListener("touchstart", listener);

    return () => {
      document.removeEventListener("mousedown", listener);
      document.removeEventListener("touchstart", listener);
    };

    function listener(event: MouseEvent | TouchEvent) {
      if (!ref.current) return;
      if (event.target instanceof Node && ref.current.contains(event.target)) {
        return;
      }
      callback(event);
    }
  }, [ref, callback]);
}
