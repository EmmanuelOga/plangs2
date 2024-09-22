// SSR compatibility
const doc = (typeof document === "undefined" ? undefined : document) as Document;
const win = (typeof window === "undefined" ? undefined : window) as Window;

export const $ = doc?.querySelector.bind(document);
export const $$ = doc?.querySelectorAll.bind(document);

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

// We could resolve this from TW's config, but this works fine for now.
const TW_md = "48rem";

/** Check if the current windows matches TW's md breakpoint. */
export const twBreakMd = () => win?.matchMedia(`(min-width: ${TW_md})`).matches ?? false;

const TW_COLORS = [
  // "debugging" colors.
  "outline-red-500 bg-red-500/30",
  "outline-green-500 bg-green-500/30",
  "outline-blue-500 bg-blue-500/30",
];

/**
 * Collect tailwind classes. Passing a number adds an outline and bg color.
 */
export function tw(...classes: (number | string | undefined)[]): string {
  return classes
    .map(k => (typeof k === "number" ? `outline-2 ${TW_COLORS[k % TW_COLORS.length]} debug-bg-${k % 3}` : k))
    .filter(Boolean)
    .join(" ");
}
