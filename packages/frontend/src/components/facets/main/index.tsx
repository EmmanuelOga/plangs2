import { render } from "preact";

import { tw } from "@plangs/frontend/auxiliar/utils";
import type { PlangsGraph } from "@plangs/plangs/index";
import type { TAB } from "@plangs/server/components/layout";
import { cl, elems } from "@plangs/server/elements";
import { FacetsMain, type FacetsMainProps } from "./facets-main";

const CL = "facetsMain";

export function facetsMain({ tab, class: cssClass }: { tab: TAB; class: string }) {
  return <div data-tab={tab} class={tw(cssClass, cl(CL))} />;
}

export function activateFacetsMain(pg: PlangsGraph) {
  for (const elem of elems(CL)) {
    if (elem.dataset.tab) {
      const props: FacetsMainProps = {
        pg: pg,
        tab: elem.dataset.tab as TAB,
      };
      render(<FacetsMain {...props} />, elem);
    } else {
      console.error("Missing prop for FacetsMain component.");
    }
  }
}
