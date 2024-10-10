import type { NPlang, PlangsGraph } from "@plangs/plangs/index";
import { cl } from "@plangs/server/elements";

import type { TAB } from "@plangs/server/pages/layout";
import type { PlInfoElement } from "../components/pl-info";
import { $, elem, on } from "../utils";
import { setPlTab } from "./tabs";

/** Attempt to load a plang using the nearest data-key attribute. */
export function getPl(pg: PlangsGraph, target: EventTarget | null): NPlang | undefined {
  const keyHolder = (target as Element).closest("[data-node-key]") as HTMLElement;
  if (!keyHolder || !keyHolder.dataset.nodeKey) return;
  return pg.nodes.pl.get(keyHolder.dataset.nodeKey as NPlang["key"]);
}

/**
 * Handle Pill clicks on the infobox.
 */
export function hookPlInfo(pg: PlangsGraph) {
  on(document.body, "click", ({ target }: MouseEvent) => {
    const isPill = (target as HTMLElement)?.matches(`.${cl("pill")}`);
    if (isPill && currentTab() !== "plangs") {
      const pl = getPl(pg, target);
      if (pl) window.location.href = `/${pl.plainKey}`;
    }
  });

  const plInfo = elem<PlInfoElement>("plInfo");
  if (plInfo)
    on(plInfo, "click", ({ target }: MouseEvent) => {
      const pl = getPl(pg, target);
      if (!pl) return;

      if (currentTab() === "plangs") {
        plInfo.pl = pl;
        setPlTab(pl);
      } else {
        window.location.href = `/${pl.plainKey}`;
      }
    });
}

export function currentTab(): TAB | undefined {
  return $<HTMLAnchorElement>(`.${cl("navLink")}[data-current]`)?.dataset?.tab as TAB | undefined;
}

/** Get the latest plang from local storage, or a default one. */
export function lastPlang(pg: PlangsGraph): NPlang {
  try {
    const { key, data } = JSON.parse(localStorage.getItem("last-plang") || "{}");
    if (key && data) return pg.nodes.pl.set(key as NPlang["key"], data);
  } catch (err) {
    console.warn(err);
  }
  return pg.nodes.pl.set("pl+c", { name: "C", description: "The C programming language." });
}
