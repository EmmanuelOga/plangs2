import { useReducer } from "preact/hooks";
import type { VID_Plang, VID_TypeSystem } from "../../schemas/entities";
import type { PlangsGraph } from "../../schemas/graph";
import type { Filter } from "../components/facets/options";
import { isEqual } from "lodash-es";
import { merge } from "node_modules/cheerio/lib/esm/static";
import { mergeInto } from "src/util";

type Filters = "typeSystems";

interface PlangsQueryState {
  pg: PlangsGraph;
  pl_ids: VID_Plang[];
  filters: Map<Filters, Filter>;
}

type PlangsQueryAction = {
  key: Filters;
  filter: Filter;
};

// TODO: memoize this.
function byTSys(pg: PlangsGraph, filter: Filter): Set<VID_Plang> {
  const result = new Set<VID_Plang>();
  const values = [...filter.values.entries()].filter(([, v]) => v).map(([k]) => k);
  if (values.length > 0) {
    for (const vid of pg.v_plang.keys()) {
      if (pg.plangHasTypeSystems(vid, filter.valuesMode, values)) result.add(vid);
    }
  }
  return result;
}

function filterPlangs(pg: PlangsGraph, filters: Map<Filters, Filter>): VID_Plang[] {
  const ids: VID_Plang[] = [];

  const includes = new Set<VID_Plang>();
  const excludes = new Set<VID_Plang>();

  const ftTsys = filters.get("typeSystems");
  if (ftTsys?.enabled) {
    mergeInto(ftTsys.filterMode === "include" ? includes : excludes, byTSys(pg, ftTsys));
  }

  console.log(`Using: ${includes.size} includes, ${excludes.size} excludes`)

  for (const vid of pg.v_plang.keys()) {
    if (excludes.size > 0 && excludes.has(vid)) continue;
    if (includes.size > 0 && !includes.has(vid)) continue;
    ids.push(vid);
  }

  return ids;
}

function reducer(state: PlangsQueryState, { key, filter }: PlangsQueryAction): PlangsQueryState {
  const { filters, pg } = state;

  if (key === "typeSystems") filters.set("typeSystems", filter);

  const pl_ids = filterPlangs(pg, filters);
  if (!isEqual(pl_ids, state.pl_ids)) return { ...state, pl_ids };

  return state;
}

export function usePlangsQuery(pg: PlangsGraph) {
  const pl_ids: VID_Plang[] = [...pg.v_plang.keys()];
  const filters = new Map<Filters, Filter>();
  const initialState: PlangsQueryState = { pg, filters, pl_ids };
  return useReducer(reducer, initialState);
}
