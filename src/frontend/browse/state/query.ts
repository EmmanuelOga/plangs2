import { isEqual } from "lodash-es";
import { useReducer } from "preact/hooks";
import { addAll, hasAll, hasAny } from "src/util";
import type { VID_Plang } from "../../../schemas/entities";
import type { PlangsGraph } from "../../../schemas/graph";
import type { Filter } from "../components/facets/options";

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
function byTSys(pg: PlangsGraph, values: Set<string>, mode: Filter["valuesMode"]): Set<VID_Plang> {
  const result = new Set<VID_Plang>();
  for (const vid of pg.v_plang.keys()) {
    const tsys = pg.e_plang_tsys.adjacentFrom(vid);
    if (mode === "all-of" ? hasAll(tsys, values) : hasAny(tsys, values)) result.add(vid);
  }
  return result;
}

function filterPlangs(pg: PlangsGraph, filters: Map<Filters, Filter>): VID_Plang[] {
  const ids: VID_Plang[] = [];

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

  for (const vid of pg.v_plang.keys()) {
    if (useExcludes && excludes.has(vid)) continue;
    if (useIncludes && !includes.has(vid)) continue;
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
