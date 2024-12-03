import { h } from "preact";

import { caller } from "@plangs/auxiliar/caller";

export const script = (src: string) => rawTag("script", src);
export const style = (src: string) => rawTag("style", src);
export const rawTag = (tag: "script" | "style", __html: string) => h(tag, { dangerouslySetInnerHTML: { __html } });

/** Return callers of a function for debbuging. */
export function callers(): string {
  const lines = caller({
    dontMatch: /preact|[A-Z]@/,
    clean: { regExp: new RegExp(`${window.location.href.split("#")[0]}bundle/`, "g"), replacer: () => "" },
  }).slice(1);

  // JSON is more readable for this use case.
  return JSON.stringify(lines, null, 2);
}
