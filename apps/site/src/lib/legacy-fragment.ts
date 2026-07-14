import type { FacetMode } from "../stores/facets";

/**
 * Best-effort shim for pre-v3 deep links (PLAN §6.1/D4).
 *
 * The old site encoded grid filter state as RISON in the URL hash, e.g.
 *   #(paradigms:!(para+functional,para+oop),mode:all)
 * v3 uses readable query params instead. Rather than pull in a RISON parser for
 * legacy links alone, we extract the array groups we understand and map legacy
 * vertex keys (`para+functional`) to v3 facet slugs (`functional`). Anything we
 * don't recognise is ignored — the shim only ever *adds* filters a user asked
 * for, and the caller rewrites the URL to query params afterwards.
 */
const GROUP = /([a-zA-Z]+):!\(([^)]*)\)/g;
const MODE = /\bmode:'?(all|any)'?/;

/** Facet dimensions we accept from a legacy fragment. */
const KNOWN_DIMS = new Set(["paradigms", "tags", "platforms", "typeSystems", "licenses"]);

/** `para+functional` / `'para+functional'` → `functional`. */
function toSlug(raw: string): string | undefined {
  const v = raw.trim().replace(/^'|'$/g, "");
  if (!v) return undefined;
  const plus = v.indexOf("+");
  return plus < 0 ? v : v.slice(plus + 1);
}

export interface LegacySelection {
  selected: Record<string, string[]>;
  mode: FacetMode;
}

/** Parse a legacy RISON-ish hash. Returns undefined when nothing usable found. */
export function parseLegacyFragment(hash: string): LegacySelection | undefined {
  const frag = hash.startsWith("#") ? hash.slice(1) : hash;
  if (!frag) return undefined;
  const decoded = (() => {
    try {
      return decodeURIComponent(frag);
    } catch {
      return frag;
    }
  })();

  const selected: Record<string, string[]> = {};
  GROUP.lastIndex = 0;
  for (let m = GROUP.exec(decoded); m !== null; m = GROUP.exec(decoded)) {
    const dim = m[1];
    const body = m[2];
    if (!dim || !body || !KNOWN_DIMS.has(dim)) continue;
    const values = body
      .split(",")
      .map(toSlug)
      .filter((v): v is string => v !== undefined);
    if (values.length) selected[dim] = [...new Set(values)];
  }

  if (!Object.keys(selected).length) return undefined;
  const mode: FacetMode = MODE.exec(decoded)?.[1] === "all" ? "all" : "any";
  return { selected, mode };
}
