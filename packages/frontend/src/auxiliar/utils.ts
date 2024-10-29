import { h } from "preact";

import { caller } from "@plangs/plangs/util";

export const script = (src: string) => rawTag("script", src);
export const style = (src: string) => rawTag("style", src);
export const rawTag = (tag: "script" | "style", __html: string) => h(tag, { dangerouslySetInnerHTML: { __html } });

// biome-ignore lint/suspicious/noExplicitAny: We want to debounce any function.
type AnyFunc = (...args: any[]) => any;

export function debounce<T extends AnyFunc>(callback: T, millies: number): (...args: Parameters<T>) => void {
  let timeout: Timer | undefined;
  return (...args: Parameters<AnyFunc>) => {
    if (timeout) clearTimeout(timeout);
    timeout = setTimeout(() => callback(...args), millies);
  };
}

/** Tap aka "Thrush combinator" aka "T combinator". */
export const tap = <T, R>(item: T, action: (item: T) => R): R => action(item);

/** Return callers of a function for debbuging. */
export function callers(): string {
  const lines = caller({
    dontMatch: /preact|[A-Z]@/,
    clean: { regExp: new RegExp(`${window.location.href.split("#")[0]}bundle/`, "g"), replacer: () => "" },
  }).slice(1);

  // JSON is more readable for this use case.
  return JSON.stringify(lines, null, 2);
}

// https://stackoverflow.com/a/32108184
// biome-ignore lint/suspicious/noExplicitAny: checks if _any_ object is empty.
export function isEmpty(obj: any) {
  for (const prop in obj) {
    if (Object.hasOwn(obj, prop)) return false;
  }
  return true;
}
