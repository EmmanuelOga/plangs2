import type { RefObject } from "preact";
import { useEffect, useRef } from "preact/hooks";

export function useDOMReady<T>(domReacyAction: () => T): RefObject<T | undefined> {
  const ref = useRef<T>();

  // biome-ignore lint/correctness/useExhaustiveDependencies: executes only once.
  useEffect(() => {
    const updateRef = () => (ref.current = domReacyAction());
    if (document.readyState === "loading") {
      document.addEventListener("DOMContentLoaded", updateRef);
      return () => document.removeEventListener("DOMContentLoaded", updateRef);
    }
    // If the document is already loaded, we can safely update the ref.
    updateRef();
  }, []);

  return ref as RefObject<T | undefined>;
}
