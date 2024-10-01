import type { PlangsGraph } from "@plangs/plangs/index";
import { cl } from "@plangs/server/elements";

import type { PlInfoElement } from "../components/pl-info";
import { $, elem, on } from "../utils";
import { getPl } from "./pl";
import { setPlTab } from "./tabs";

export function hookPlInfo(pg: PlangsGraph) {
  const plInfo = elem<PlInfoElement>("plInfo");
  console.log("hookPlInfo", plInfo);
  if (!plInfo) return;

  const currentTab = () => $<HTMLAnchorElement>(`.${cl("navLink")}[data-current]`)?.dataset?.tab;

  //////////////////////////////////////////////////////////////////////////////////
  // On click on a pl-pill in the infobox, update the infobox.

  on(plInfo, "click", ({ target }: MouseEvent) => {
    const pl = getPl(pg, target);
    console.log("plInfo click", target, pl);
    if (!pl) return;

    const tab = currentTab();
    if (tab === "browse" && plInfo) {
      plInfo.pl = pl;
      setPlTab(pl);
    } else {
      window.location.href = `/${pl.plainKey}`;
    }
  });
}
