import { caller } from "@plangs/auxiliar/caller";

/** Return callers of a function for debbuging. */
export function callers(): string {
  const lines = caller({
    dontMatch: /preact|[A-Z]@/,
    clean: { regExp: new RegExp(`${window.location.href.split("#")[0]}bundle/`, "g"), replacer: () => "" },
  }).slice(1);

  // JSON is more readable for this use case.
  return JSON.stringify(lines, null, 2);
}
