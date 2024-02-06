import { useRef } from "react";
import { useForceUpdate } from "../solution/use-force-update";

export function ForceUpdate() {
  let forceUpdate = useForceUpdate();
  let renders = useRef(0);
  renders.current++;

  return (
    <section>
      <h2>Force Update</h2>
      <p>{renders.current}</p>
      <button onClick={() => forceUpdate()}>Re-Render</button>
    </section>
  );
}
