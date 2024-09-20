import { type ELEM, type ELEMS, type INPUT, domClass, domId, domInputId } from "@plangs/server/pages/dom";

// Fake a document object for server side rendering.
// Document is not used in SSR mode anyway.
const doc = typeof document === "undefined" ? undefined : document;

export const $ = (doc as Document)?.querySelector.bind(document);
export const $$ = (doc as Document)?.querySelectorAll.bind(document);

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

  if ((!(collection instanceof HTMLCollection) || collection.length === 0) && (key as string) !== "TODO") {
    console.warn(`No elements found for class ${key}`);
  }

  for (const element of collection) {
    if (!(element instanceof HTMLElement)) {
      console.warn(`Element ${key} is not an HTMLElement. Actual: ${element}`);
    }
  }

  return collection as HTMLCollectionOf<HTMLElement>;
}
