import { render } from "preact";

import { elems } from "@plangs/frontend/auxiliar/dom";
import type { PlangsGraph } from "@plangs/plangs/graph";
import type { PlangsPage } from "@plangs/server/components/layout";

import { FacetsMain } from "./main";
import type { AnyFacetsMainState } from "./use_state";

export type FacetsMainElement = HTMLDivElement & { state?: AnyFacetsMainState };

/** Find {@link FacetsMain} component/s in the DOM and render them. */
export function activateFacetsMain(pg: PlangsGraph) {
  for (const elem of elems("facetsMain")) {
    if (pg && elem.dataset.page) {
      render(<FacetsMain pg={pg} page={elem.dataset.page as PlangsPage} />, elem);
    } else {
      console.error("Missing prop for FacetsMain component.");
    }
  }
}
