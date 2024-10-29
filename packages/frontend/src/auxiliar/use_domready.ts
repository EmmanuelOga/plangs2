import type { Ref } from "preact";
import { useEffect, useRef } from "preact/hooks";

export function useDOMReady<T>(domReacyAction: () => T): Ref<T | undefined> {
  const ref = useRef<T>();

  useEffect(() => {
    const updateRef = () => (ref.current = domReacyAction());
    if (document.readyState === "loading") {
      document.addEventListener("DOMContentLoaded", updateRef);
    } else {
      updateRef();
    }
    return () => document.removeEventListener("DOMContentLoaded", updateRef);
  }, [domReacyAction]);

  return ref as Ref<T | undefined>;
}
