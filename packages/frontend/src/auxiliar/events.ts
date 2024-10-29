export type Nil = null | undefined;

/** Adds an event listener to the target, and returns a function to undo the listener. */
export function on<T>(target: Element | Nil, type: string, listener: (ev: T) => void, opt?: AddEventListenerOptions): () => void {
  if (!target) console.warn("missing target", { type, listener, opt });
  target?.addEventListener(type, listener as EventListener, opt);
  return target ? () => off(target, type, listener, opt) : () => {};
}

export function off<T>(target: Element | Nil, type: string, listener: (ev: T) => void, opt?: AddEventListenerOptions): void {
  if (!target) console.warn("missing target", { type, listener, opt });
  target?.removeEventListener(type, listener as EventListener, opt);
}

export function send<T extends Event>(target: Element | Nil, ev: T): boolean | undefined {
  if (!target) console.warn("missing target", ev);
  return target?.dispatchEvent(ev);
}

export function customEvent<T>(type: string, detail: T, options: CustomEventInit<T> = { bubbles: true, composed: true }) {
  return new CustomEvent(type, { detail, ...options });
}

/** Util to type cast and check an event handler. */
export function handler<T extends HTMLElement, Ev extends UIEvent = UIEvent>(action: (target: T, ev: Ev) => void) {
  return (ev: Ev) => {
    if (ev.target && "tagName" in ev.target) action(ev.target as T, ev);
  };
}
