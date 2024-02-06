import { useState } from "react";
import { usePrevious } from "../solution/use-previous";

export function Previous() {
  let [state, setState] = useState("Initial");
  let previousValue = usePrevious(state);

  return (
    <section>
      <h2>Previous</h2>

      <article>
        <input
          type="text"
          value={state}
          onChange={(event) => setState(event.currentTarget.value)}
        />

        <p>{previousValue}</p>
      </article>
    </section>
  );
}
