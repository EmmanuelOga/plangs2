export function $<T = HTMLElement>(sel: string): T {
  return document.querySelector(sel) as T;
}

export function $$<T = HTMLElement>(sel: string): T[] {
  return [...document.querySelectorAll(sel)] as T[];
}

function warning<T>(ret: T, ...args: unknown[]): void {
  console.warn("Warning: nil target", ...args);
}

export function on<TEV extends Event>(
  target: HTMLElement | null | undefined,
  type: string,
  listener: (ev: TEV) => void,
  options?: AddEventListenerOptions,
): void {
  if (!target) {
    warning("setting an event", type, listener, options);
    return;
  }
  target.addEventListener(type, listener as (ev: Event) => void, options);
}

export function off<TEV extends Event>(
  target: HTMLElement | null | undefined,
  type: string,
  listener: (ev: TEV) => void,
  options?: AddEventListenerOptions,
): void {
  if (!target) {
    warning("removing event", type, listener, options);
    return;
  }
  target.removeEventListener(type, listener as (ev: Event) => void, options);
}

export function send(target: HTMLElement | null | undefined, ev: Event): boolean {
  if (!target) {
    warning("dispatching", ev);
    return false;
  }
  return target.dispatchEvent(ev);
}
