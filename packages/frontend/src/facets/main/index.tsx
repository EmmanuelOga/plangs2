import { render } from "preact";

import { elems } from "@plangs/frontend/auxiliar/dom";
import { tw } from "@plangs/frontend/auxiliar/styles";
import type { PlangsGraph } from "@plangs/plangs/graph";
import type { TAB } from "@plangs/server/components/layout";
import { cssClass } from "@plangs/server/elements";

import { FacetsMain } from "./main";
import type { AnyFacetsMainState } from "./state";

const CL = "facetsMain";

export type FacetsMainElement = HTMLDivElement & { state?: AnyFacetsMainState };

/** Used server side to create a div to act as entry point of a {@link FacetsMain} component. */
export function facetsMain({ tab, class: klass }: { tab: TAB; class: string }) {
  return <div data-tab={tab} class={tw(klass, cssClass(CL))} />;
}

/** Find {@link FacetsMain} component/s in the DOM and render them. */
export function activateFacetsMain(pg: PlangsGraph) {
  for (const elem of elems(CL)) {
    if (pg && elem.dataset.tab) {
      render(<FacetsMain pg={pg} tab={elem.dataset.tab as TAB} />, elem);
    } else {
      console.error("Missing prop for FacetsMain component.");
    }
  }
}
