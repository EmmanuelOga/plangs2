import { h } from "preact";

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

/** Collect tailwind classes. Passing a number adds an outline and bg color. */
export const tw = (...classes: (string | undefined | boolean)[]) => classes.filter(s => typeof s === "string" && !/^;|;$/.test(s)).join(" ");

/** Check if the min-width breakpoint applies right now.  */
export const minWidthBP = (size: string) => win?.matchMedia(`(min-width: ${size})`).matches ?? false;

export const script = (src: string) => tag("script", src);
export const style = (src: string) => tag("style", src);
export const tag = (tag: "script" | "style", __html: string) => h(tag, { dangerouslySetInnerHTML: { __html } });
