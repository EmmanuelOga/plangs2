import { h } from "preact";

import { caller } from "@plangs/plangs/util";
import { type CLKey, type IDKey, cl, id } from "@plangs/server/elements";

export type Nil = null | undefined;

// SSR compatibility
const doc = (typeof document === "undefined" ? undefined : document) as Document;
const win = (typeof window === "undefined" ? undefined : window) as Window;

export const $ = doc?.querySelector.bind(document);
export const $$ = doc?.querySelectorAll.bind(document);

export const elem = <T extends Element>(key: IDKey) => $<T>(`#${id(key)}`) ?? undefined;
export const elems = <T extends Element>(key: CLKey) => $$<T>(`.${cl(key)}`);

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

export function size(el: HTMLElement): [number, number] {
  const style = getComputedStyle(el);
  return [Number.parseInt(style.width), Number.parseInt(style.height)];
}

export function withinContainer(el: Element, container: Element): boolean {
  const [rect, parent] = [el.getBoundingClientRect(), container.getBoundingClientRect()];
  return rect.top >= parent.top && rect.bottom <= parent.bottom && rect.left >= parent.left && rect.right <= parent.right;
}

/**
 * Check if the target of an event is of a certain type.
 * We ask for the target and not the event because of how TS type assertions work.
 * {@example} `if (assertEventTarget<HtmlInputElement>(ev.target, t => 'tagName' in t && t.tagName === "INPUT")){
 *   ev.target // is now an HtmlInputElement
 * }`
 */
export function checkEventTarget<T>(target: unknown, check: (target: T) => boolean): target is T {
  try {
    return target !== undefined && check(target as T);
  } catch (e) {
    console.warn("Error checking assertion", e);
  }
  return false;
}

/** Collect tailwind classes. Passing a number adds an outline and bg color. */
export const tw = (...classes: (string | undefined | boolean | string[])[]) =>
  classes
    .flat(5) // Arbirtrary depth to flatten 🤷‍♂ (in practice we don't really use more than 1 level).
    .filter(s => typeof s === "string" && !/^;|;$/.test(s))
    .join(" ");

/** Check if the min-width breakpoint applies right now.  */
export const minWidthBP = (size: string) => win?.matchMedia(`(min-width: ${size})`).matches ?? false;

export const script = (src: string) => tag("script", src);
export const style = (src: string) => tag("style", src);
export const tag = (tag: "script" | "style", __html: string) => h(tag, { dangerouslySetInnerHTML: { __html } });

export function debounce(callback: () => void, millies: number): () => void {
  let timeout: Timer | undefined;
  return () => {
    if (timeout) clearTimeout(timeout);
    timeout = setTimeout(callback, millies);
  };
}

/** Allow classList.toggle with more than one class. */
export function toggleClasses(element: HTMLElement | null | undefined, classes: string | string[], check: boolean) {
  if (!element) return;
  const all = Array.isArray(classes) ? classes : classes.split(" ");
  for (const c of all) element.classList.toggle(c, check);
}

/** Call the same action on Enter or Click. */
export function onClickOnEnter(action: () => void) {
  return {
    onClick: (ev: MouseEvent) => {
      ev.stopPropagation();
      action();
    },
    onKeyDown: (ev: KeyboardEvent) => {
      ev.stopPropagation();
      if (ev.key === "Enter") {
        ev.preventDefault();
        action();
      }
    },
  };
}

// Tap aka Thrush aka T combinator.
export const tap = <T, R>(item: T, action: (item: T) => R): R => action(item);

/** Return all keys that are missing. Useful for debugging. */
export const keyMissing = (obj: any) =>
  Object.entries(obj)
    .filter(([, v]) => !v)
    .map(([k]) => k);

/** Return callers of a function for debbuging. */
export function callers(): string {
  const lines = caller({
    dontMatch: /preact|[A-Z]@/,
    clean: new RegExp(`${window.location.href.split("#")[0]}bundle/`, "g"),
  }).slice(1);

  // JSON is more readable for this use case.
  return JSON.stringify(lines, null, 2);
}
