import { h } from "preact";

import { type CLKey, type IDKey, cl, id } from "@plangs/server/elements";

export type Nil = null | undefined;

// SSR compatibility
const doc = (typeof document === "undefined" ? undefined : document) as Document;
const win = (typeof window === "undefined" ? undefined : window) as Window;

export const $ = doc?.querySelector.bind(document);
export const $$ = doc?.querySelectorAll.bind(document);

export const elem = (key: IDKey) => $<HTMLElement>(`#${id(key)}`) ?? undefined;
export const elems = (key: CLKey) => $$<HTMLElement>(`.${cl(key)}`);

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

/** Collect tailwind classes. Passing a number adds an outline and bg color. */
export const tw = (...classes: (string | undefined | boolean)[]) => classes.filter(s => typeof s === "string" && !/^;|;$/.test(s)).join(" ");

/** Check if the current windows matches TW's md breakpoint. */
export const twBreakMd = () => win?.matchMedia(`(min-width: ${TW_md})`).matches ?? false;
const TW_md = "48rem"; // We could resolve this from TW's config, but this works fine for now.

export const script = (src: string) => tag("script", src);
export const style = (src: string) => tag("style", src);
export const tag = (tag: "script" | "style", __html: string) => h(tag, { dangerouslySetInnerHTML: { __html } });
