import { ForceUpdate } from "./components/force-update";
import { Toggle } from "./components/toggle";
import { LocalStorage } from "./components/local-storage";
import { IsOnline } from "./components/is-online";
import { Previous } from "./components/previous";
import { Interval } from "./components/interval";
import { ClickOutside } from "./components/click-outside";

export function App() {
  return (
    <main>
      <ClickOutside />
      <ForceUpdate />
      <Toggle />
      <LocalStorage />
      <IsOnline />
      <Previous />
      <Interval />
    </main>
  );
}
