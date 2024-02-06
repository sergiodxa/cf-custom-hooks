interface Callback {
  (): void;
}

export function useInterval(ms: number, callback: Callback) {}
