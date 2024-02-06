import { useIsOnline } from "../solution/use-is-online";

export function IsOnline() {
  let isOnline = useIsOnline();

  return (
    <section>
      <h2>Is Online</h2>
      <article>{isOnline ? <p>Online</p> : <p>Offline</p>}</article>
    </section>
  );
}
