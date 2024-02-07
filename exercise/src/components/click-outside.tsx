import { useRef, useState } from "react";
import { useOnClickOutside } from "../hooks/use-on-click-outside";
import { useAddMenuOpenClass } from "../hooks/use-add-menu-open-class";

export function ClickOutside() {
  let [isOpen, setState] = useState(false);

  let ref = useRef<HTMLUListElement>(null);
  useOnClickOutside(ref, () => setState(false));

  useAddMenuOpenClass(ref);

  return (
    <section>
      <h2>Click Outside</h2>
      <article>
        <button onClick={() => setState(true)}>Open</button>

        <ul ref={ref} style={{ display: isOpen ? "block" : "none" }}>
          <li>Lorem</li>
          <li>Ipsum</li>
          <li>Dolor</li>
          <li>Sit</li>
          <li>Amet</li>
        </ul>
      </article>
    </section>
  );
}
