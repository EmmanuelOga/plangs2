import {
  type ELEM,
  type ELEMS,
  type INPUT,
  domClass,
  domId,
  domInputId,
} from "@plangs/server/pages/dom";

// SSR compatibility
const doc = typeof document === "undefined" ? undefined : document;
const win = typeof window === "undefined" ? undefined : window;

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

export function customEvent<T>(
  type: string,
  detail: T,
  options: CustomEventInit = { bubbles: true, composed: true },
): CustomEvent {
  return new CustomEvent(type, { detail, ...options });
}

export function elem<T extends ELEM>(key: T): HTMLElement {
  const element = document.getElementById(domId(key));

  if (!(element instanceof HTMLElement) && (key as string) !== "TODO") {
    console.warn(`Element ${key} is not an HTMLElement. Actual: ${element}`);
  }

  return element as HTMLElement;
}

export function input<T extends INPUT>(key: T): HTMLElement {
  const element = document.getElementById(domInputId(key));

  if (!(element instanceof HTMLElement) && (key as string) !== "TODO") {
    console.warn(`Element ${key} is not an HTMLElement. Actual: ${element}`);
  }

  return element as HTMLElement;
}

export function elems<T extends ELEMS>(key: T): HTMLCollectionOf<HTMLElement> {
  const collection = document.getElementsByClassName(domClass(key));

  if (
    (!(collection instanceof HTMLCollection) || collection.length === 0) &&
    (key as string) !== "TODO"
  ) {
    console.warn(`No elements found for class ${key}`);
  }

  for (const element of collection) {
    if (!(element instanceof HTMLElement)) {
      console.warn(`Element ${key} is not an HTMLElement. Actual: ${element}`);
    }
  }

  return collection as HTMLCollectionOf<HTMLElement>;
}

// We could resolve this from TW's config, but this works fine for now.
const TW_md = "48rem";

/** Check if the current windows matches TW's md breakpoint. */
export const twBreakMd = () => win?.matchMedia(`(min-width: ${TW_md})`).matches ?? false;

// "debugging" colors.
const TW_COLORS = ["outline-red-500", "outline-green-500", "outline-blue-500"];

/**
 * Collect tailwind classes. Pass any number to get an outline color from {@link TW_COLORS},
 * for "debugging" the layout.
 */
export function tw(...classes: (number | string | undefined)[]): string {
  return classes
    .map(k => (typeof k === "number" ? `outline-2 ${TW_COLORS[TW_COLORS.length % k]}` : k))
    .filter(Boolean)
    .join(" ");
}
