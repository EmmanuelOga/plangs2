// import type { VID_Plang } from "../../schemas/entities";
// import type { PlangsGraph } from "../../schemas/graph";
// import { Filter } from "../components/facets/options";
// import { VSet } from "./vset";

// type Filters = "typeSystems";

// interface FiltersState {
//   pl_ids: VID_Plang[];
//   filters: Map<Filters, Filter>;
// }

// type FiltersActions = { type: "update"; filter: string; val: string } | { type: "remove"; filter: string; val: string };

// function reducer(state: FiltersState, action: FiltersActions): FiltersState {
//   return state;
// }

// function useFilters(pg: PlangsGraph) {
//   const pl_vids: string[] = [...pg.v_plang.keys()];

//   const filters = new Map<Filters, Filter>();
//   filters.set("typeSystems", new Filter());

//   const initialState = {};

//   return { pl_vids, filters };
// }
