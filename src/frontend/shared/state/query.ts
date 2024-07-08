import type { VID_Plang } from "../../../schemas/entities";
import type { PlangsGraph } from "../../../schemas/graph";
import { addAll, hasAll, hasAny } from "../../../util";

export type Filter = {
  enabled: boolean;
  filterMode: "include" | "exclude";
  valuesMode: "all-of" | "any-of";
  values: Set<string>;
};

export type Filters = "typeSystems";

function byTSys(pg: PlangsGraph, values: Set<string>, mode: Filter["valuesMode"]): Set<VID_Plang> {
  const result = new Set<VID_Plang>();
  for (const vid of pg.v_plang.keys()) {
    const tsys = pg.e_plang_tsys.adjacentFrom(vid);
    if (mode === "all-of" ? hasAll(tsys, values) : hasAny(tsys, values)) result.add(vid);
  }
  return result;
}

export function filterPlangs(
  pg: PlangsGraph,
  filters: Map<Filters, Filter>,
): { includes?: Set<VID_Plang>; excludes?: Set<VID_Plang> } {
  const includes = new Set<VID_Plang>();
  const excludes = new Set<VID_Plang>();

  let useIncludes = false;
  let useExcludes = false;

  const ftTsys = filters.get("typeSystems");
  if (ftTsys?.enabled && ftTsys.values.size > 0) {
    if (ftTsys.filterMode === "include") {
      useIncludes = true;
      addAll(includes, byTSys(pg, ftTsys.values, ftTsys.valuesMode));
    } else {
      useExcludes = true;
      addAll(excludes, byTSys(pg, ftTsys.values, ftTsys.valuesMode));
    }
  }

  return { excludes: useExcludes ? excludes : undefined, includes: useIncludes ? includes : undefined };
}
