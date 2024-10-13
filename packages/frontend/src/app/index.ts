import "preact/debug";

import { PlangsGraph } from "@plangs/plangs";
import pgData from "@plangs/server/plangs.json";

import { registerInputCompl } from "../components/input-compl";
import { registerInputFacet } from "../components/input-facet";
import { registerInputSel } from "../components/input-sel";
import { registerInputToggle } from "../components/input-toggle";
import { ToggleFilters, ToggleHamburguer, ToggleLights } from "../components/input-toggle/state";
import { type PlInfoElement, registerPlangInfo } from "../components/pl-info";
import { elem, elems } from "../utils";
import { startGridNav } from "./gridNav";
import { connectLivereload } from "./livereload";
import { hookPlInfo, lastPlang } from "./pl";
import { currentTab, setPlTab } from "./tabs";

function start() {
  registerPlangInfo();
  registerInputCompl();
  registerInputSel();
  registerInputFacet();
  registerInputToggle();

  const pg = new PlangsGraph().loadJSON(pgData);

  window.restoreFilters = () => ToggleFilters.initial().runEffects();
  window.restoreHamburguer = () => ToggleHamburguer.initial().runEffects();
  window.restoreLightMode = () => ToggleLights.initial().runEffects();

  window.restorePlTab = () => setPlTab(lastPlang(pg));

  window.restorePlInfo = () => {
    const plInfo = elem<PlInfoElement>("plInfo");
    if (plInfo) plInfo.pl = lastPlang(pg);
  };

  window.focusFilter = (id: string) => {
    const elem = document.getElementById(id);
    if (!elem) return;
    for (const elem of elems("facet")) elem.classList.add("hidden");
    elem.classList.remove("hidden");
  };

  document.addEventListener("DOMContentLoaded", () => {
    if (currentTab() === "plangs") startGridNav(pg);
    hookPlInfo(pg);

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
    restorePlTab: () => void;
  }
}
