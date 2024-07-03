import { useReducer } from "preact/hooks";
import type { VID_Plang, VID_TypeSystem } from "../../schemas/entities";
import type { PlangsGraph } from "../../schemas/graph";
import { Filter } from "../components/facets/options";
import { isEqual } from "lodash-es";

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

function filterByTypeSystems(pg: PlangsGraph, vid: VID_Plang, ftTsys: Filter): boolean {
  if (ftTsys.values.size === 0) return true;

  if (ftTsys.mode === "all-of") {
    for (const ts of ftTsys.values) {
      if (!pg.e_plang_tsys.has(vid, ts as VID_TypeSystem)) return false;
    }
    return true;
  }
  // any-of
  for (const ts of ftTsys.values) {
    if (pg.e_plang_tsys.has(vid, ts as VID_TypeSystem)) return true;
  }
  return false;
}

function filterPlangs(pg: PlangsGraph, filters: Map<"typeSystems", Filter>): VID_Plang[] {
  const ids: VID_Plang[] = [];

  for (const vid of pg.v_plang.keys()) {
    const ftTsys = filters.get("typeSystems");
    if (!ftTsys) throw new Error("Missing typeSystems filter!");

    let include = true;

    if (ftTsys.enabled && include) {
      include = filterByTypeSystems(pg, vid, ftTsys);
    }

    if (include) ids.push(vid);
  }

  return ids;
}

function reducer(state: PlangsQueryState, action: PlangsQueryAction): PlangsQueryState {
  const { filters, pg } = state;

  if (action.key === "typeSystems") {
    filters.set("typeSystems", action.filter);
  }

  const pl_ids = filterPlangs(pg, filters);

  if (!isEqual(pl_ids, state.pl_ids)) return { ...state, pl_ids };

  return state;
}

export function usePlangsQuery(pg: PlangsGraph) {
  const pl_ids: VID_Plang[] = [...pg.v_plang.keys()];

  const filters = new Map<Filters, Filter>([["typeSystems", new Filter()]]);

  const initialState: PlangsQueryState = { pg, filters, pl_ids };

  return useReducer(reducer, initialState);
}
