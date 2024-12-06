import { createContext } from "preact";

import { useDispatchable } from "@plangs/frontend/auxiliar/dispatchable";
import type { PlangsGraph } from "@plangs/plangs/graph";
import type { PlangsPage } from "@plangs/server/components/layout";
import { AppsFacetsState } from "../kind/apps";
import { CommunitiesFacetsState } from "../kind/communities";
import { LearningFacetsState } from "../kind/learning";
import { LibrariesFacetsState } from "../kind/libraries";
import { PlangsFacetsState } from "../kind/plangs";
import { ToolsFacetsState } from "../kind/tools";
import type { FacetsMainState } from "./state";

/** Share the main component state across all other children components that may need it. */
export const FacetsMainContext = createContext<AnyFacetsMainState | undefined>(undefined);

/** Generic state so components can work with any group and facet key. */
export type AnyFacetsMainState = FacetsMainState<string, string>;

export function useFacetState(page: PlangsPage, pg: PlangsGraph): AnyFacetsMainState | undefined {
  let state: AnyFacetsMainState | undefined;

  if (page === "apps") state = useDispatchable(() => AppsFacetsState.initial(pg) as AnyFacetsMainState);
  if (page === "communities") state = useDispatchable(() => CommunitiesFacetsState.initial(pg) as AnyFacetsMainState);
  if (page === "learning") state = useDispatchable(() => LearningFacetsState.initial(pg) as AnyFacetsMainState);
  if (page === "libs") state = useDispatchable(() => LibrariesFacetsState.initial(pg) as AnyFacetsMainState);
  if (page === "plangs") state = useDispatchable(() => PlangsFacetsState.initial(pg) as AnyFacetsMainState);
  if (page === "tools") state = useDispatchable(() => ToolsFacetsState.initial(pg) as AnyFacetsMainState);

  if (!state) {
    console.error("Unknown page", page);
    return;
  }

  // Ensures the initial side effects are enforced: for instance filtering thumbs according to state fragment/localStorage.
  return state.runEffects();
}
