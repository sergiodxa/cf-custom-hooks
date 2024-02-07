import { RefObject, useEffect } from "react";

export function useAddMenuOpenClass(ref: RefObject<HTMLElement>) {
  useEffect(() => {
    ref.current?.classList.add("menu-open");
    return () => {
      ref.current?.classList.remove("menu-open");
    };
  });
}
