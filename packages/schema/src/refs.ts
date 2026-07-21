import { z } from "zod";

/**
 * D8 — qualified assertions, minimal convention (settled 2026-07-21).
 *
 * Any entry in a YAML `rels` list MAY be an annotated ref `{ ref, since?,
 * until? }` instead of a bare node key. The qualifiers are VALID TIME — when
 * the assertion holds in the world, as a version ("3.0") or a date ("2015",
 * "2015-12", "2015-12-03") — git history is the transaction time, so there is
 * deliberately no `recordedAt`. Bare keys stay valid forever; annotation is
 * opt-in per ref.
 *
 * `strictObject` on purpose: a typo like `sinse:` must be a load error, not a
 * silently ignored key. Growing the convention means extending this schema —
 * which is the D7 rule ("wanting to author something new is the signal to
 * extend the canonical schema").
 */
export const zAnnotatedRef = z.strictObject({
  /** Target node key, e.g. `lic/apache`. */
  ref: z.string(),
  /** Valid from (version or date). Quote it in YAML: `since: "2015"`. */
  since: z.string().optional(),
  /** Valid to (version or date), exclusive of "still true today". */
  until: z.string().optional(),
});

export type AnnotatedRef = z.infer<typeof zAnnotatedRef>;

/** One `rels` list entry: a bare node key or an annotated ref. */
export type RelTarget = string | AnnotatedRef;

export const zRelTarget = z.union([z.string(), zAnnotatedRef]);

/** The target node key of a rel entry, whichever form it takes. */
export function refKey(target: RelTarget): string {
  return typeof target === "string" ? target : target.ref;
}

/**
 * The valid-time qualifiers of a rel entry, or `undefined` when unqualified —
 * so `{ ref: "lic/mit" }` and `"lic/mit"` qualify identically (the formatter
 * collapses the former to the latter).
 */
export function refQualifiers(target: RelTarget): Omit<AnnotatedRef, "ref"> | undefined {
  if (typeof target === "string") return undefined;
  const out: Omit<AnnotatedRef, "ref"> = {};
  if (target.since !== undefined) out.since = target.since;
  if (target.until !== undefined) out.until = target.until;
  return Object.keys(out).length ? out : undefined;
}
