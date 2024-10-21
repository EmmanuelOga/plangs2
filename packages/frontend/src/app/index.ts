import "preact/debug";

import { registerIconButton } from "@plangs/frontend/components/icon-button";
import { ToggleFacets, ToggleHamburguer, ToggleLights } from "@plangs/frontend/components/icon-button/state";
import { registerInputFacet } from "@plangs/frontend/components/input-facet";
import { registerInputSel } from "@plangs/frontend/components/input-sel";
import { type PlInfoElement, registerPlangInfo } from "@plangs/frontend/components/pl-info";
import { elem, elems, toggleClasses } from "@plangs/frontend/utils";
import { PlangsGraph } from "@plangs/plangs";
import pgData from "@plangs/server/plangs.json";

import { startGridNav } from "./grid";
import { connectLivereload } from "./livereload";
import { lastPlang } from "./pl";
import { currentTab } from "./tabs";

function start() {
  registerPlangInfo();
  registerInputSel();
  registerInputFacet();
  registerIconButton();

  const pg = new PlangsGraph().loadJSON(pgData);

  window.restoreFilters = () => ToggleFacets.initial().runEffects();
  window.restoreHamburguer = () => ToggleHamburguer.initial().runEffects();
  window.restoreLightMode = () => ToggleLights.initial().runEffects();

  window.restorePlInfo = () => {
    const plInfo = elem<PlInfoElement>("plInfo");
    if (plInfo) plInfo.pl = lastPlang(pg);
  };

  window.focusFilter = (facetKey: string) => {
    const facet = document.getElementById(facetKey);
    if (!facet) return;

    for (const link of elems<HTMLElement>("facetLink")) {
      const current = link.dataset.facet === facetKey;
      toggleClasses(link, "text-primary", current);

      if (current) {
        const title = elem("currentFacet");
        if (title) title.textContent = link.textContent;
        link.scrollIntoView({ behavior: "smooth", block: "center" });
      }
    }

    for (const elem of elems("facet")) elem.classList.add("hidden");
    facet.classList.remove("hidden");
  };

  document.addEventListener("DOMContentLoaded", () => {
    if (currentTab() === "plangs") startGridNav(pg);

    // Debugging.
    connectLivereload();
  });
}

start();

// Declare some globals that are called as the page is being loaded to avoid flashing the wrong content.
declare global {
  interface Window {
    focusFilter: (id: string) => void;
    restoreFilters: () => void;
    restoreHamburguer: () => void;
    restoreLightMode: () => void;
    restorePlInfo: () => void;
  }
}
