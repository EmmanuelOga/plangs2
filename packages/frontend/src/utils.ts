export const $ = document.querySelector.bind(document);

export const $$ = document.querySelectorAll.bind(document);

/** Adds an event listener to the target, and returns a function to undo the listener. */
export function on<TEV extends Event>(
  target: Element | null | undefined,
  type: string,
  listener: (ev: TEV) => void,
  options?: AddEventListenerOptions,
): () => void {
  if (!target) {
    console.warn("missing event target", type, listener, options);
    return () => {};
  }
  target.addEventListener(type, listener as (ev: Event) => void, options);
  return () => off(target, type, listener, options);
}

export function off<TEV extends Event>(
  target: Element | null | undefined,
  type: string,
  listener: (ev: TEV) => void,
  options?: AddEventListenerOptions,
): void {
  if (!target) {
    console.warn("missing event target", type, listener, options);
    return;
  }
  target.removeEventListener(type, listener as (ev: Event) => void, options);
}

export function send(target: Element | null | undefined, ev: Event): boolean {
  if (!target) {
    console.warn("missing event target", ev);
    return false;
  }
  return target.dispatchEvent(ev);
}

export function customEvent<T>(type: string, detail: T, options: CustomEventInit = { bubbles: true, composed: true }): CustomEvent {
  return new CustomEvent(type, { detail, ...options });
}
