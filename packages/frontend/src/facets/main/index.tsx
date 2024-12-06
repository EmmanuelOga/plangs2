import { render } from "preact";

import { elems } from "@plangs/frontend/auxiliar/dom";
import { tw } from "@plangs/frontend/auxiliar/styles";
import type { PlangsGraph } from "@plangs/plangs/graph";
import type { PlangsPage } from "@plangs/server/components/layout";
import { cssClass } from "@plangs/server/elements";

import { FacetsMain } from "./main";
import type { AnyFacetsMainState } from "./use_state";

const CL = "facetsMain";

export type FacetsMainElement = HTMLDivElement & { state?: AnyFacetsMainState };

/** Used server side to create a div to act as entry point of a {@link FacetsMain} component. */
export function facetsMain({ page, class: klass }: { page: PlangsPage; class: string }) {
  return <div data-page={page} class={tw(klass, cssClass(CL))} />;
}

/** Find {@link FacetsMain} component/s in the DOM and render them. */
export function activateFacetsMain(pg: PlangsGraph) {
  for (const elem of elems(CL)) {
    if (pg && elem.dataset.tab) {
      render(<FacetsMain pg={pg} page={elem.dataset.tab as PlangsPage} />, elem);
    } else {
      console.error("Missing prop for FacetsMain component.");
    }
  }
}
