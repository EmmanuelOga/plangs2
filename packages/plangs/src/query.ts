import type { VID_Plang } from "./schema";
import type { PlangsGraph } from "./graph";
import { hasAll, hasAny, addAll } from "./util";

type Values = {
  mode: "all" | "any";
  values: Set<string>;
};

/** All possible filters in one. */
export type PlangFilters = {
  // String filters are used if the string is non-empty.
  plangName: string;
  releaseMinDate: string;

  // Boolean filters are used if true.
  hasLogo: boolean;
  hasReleases: boolean;
  hasWebsite: boolean;
  hasWikipedia: boolean;
  transpiler: boolean;

  // Value filters are used if the set is non-empty.
  dialectOf: Values;
  implementedWith: Values;
  implements: Values;
  influenced: Values;
  influencedBy: Values;
  licenses: Values;
  paradigm: Values;
  people: Values;
  plangExt: Values;
  platform: Values;
  standardFor: Values;
  typeSystems: Values;
};

export type Filter = {
  enabled: boolean;
  filterMode: "include" | "exclude";
  valuesMode: "all-of" | "any-of";
  values: Set<string>;
};

export function filter(pg: PlangsGraph, filters: PlangFilters): Set<VID_Plang> {
  const result = new Set<VID_Plang>();

  // A filter is enabled when there's a non-zero value for it.
  // We add a plang as soon as it passes any filters:
  // this implementation never removes languages from the result set.
  for (const [vid, pl] of pg.v_plang) {

    if (filters.plangName.length > 0) {
      if ((pl.name ?? '').toLowerCase().includes(filters.plangName.toLowerCase())) {
        result.add(vid);
        continue;
      }
    }

    if (filters.releaseMinDate.length > 0) {
    }
  }

  return result;
}
