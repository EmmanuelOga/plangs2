import "preact/debug";

import { PlangsGraph } from "@plangs/plangs";
import { cl } from "@plangs/server/elements";
import pgData from "@plangs/server/plangs.json";

import { registerInputCompl } from "../components/input-compl";
import { registerInputFacet } from "../components/input-facet";
import { registerInputSel } from "../components/input-sel";
import { registerInputToggle } from "../components/input-toggle";
import { ToggleHamburguer, ToggleLights } from "../components/input-toggle/state";
import { type PlInfoElement, registerPlangInfo } from "../components/pl-info";
import { elem } from "../utils";
import { startGridNav } from "./gridNav";
import { connectLivereload } from "./livereload";
import { hookPlInfo, lastPlang } from "./pl";
import { setPlTab } from "./tabs";

function start() {
  registerPlangInfo();
  registerInputCompl();
  registerInputSel();
  registerInputFacet();
  registerInputToggle();

  const pg = new PlangsGraph().loadJSON(pgData);

  window.restorePlTab = () => setPlTab(lastPlang(pg));
  window.restorePlInfo = () => {
    const plInfo = elem<PlInfoElement>("plInfo");
    if (plInfo) plInfo.pl = lastPlang(pg);
  };
  window.restoreLightMode = () => ToggleLights.initial().sideEffects();
  window.restoreHamburguer = () => ToggleHamburguer.initial().sideEffects();
  window.focusFilter = (id: string) => {
    const elem = document.getElementById(id);
    if (!elem) return;
    elem.scrollIntoView({ behavior: "smooth", block: "start" });
    const anim = elem.querySelector(`.${cl("filterAnim")}`);
    if (!anim || !anim.classList.contains("hidden")) return;
    anim.classList.remove("hidden");
    setTimeout(() => anim.classList.add("hidden"), 1000);
  };

  document.addEventListener("DOMContentLoaded", () => {
    startGridNav(pg);
    hookPlInfo(pg);

    // Debugging.
    connectLivereload();
  });
}

start();

// Declare some globals that are called as the page is being loaded to avoid flashing the wrong content.
declare global {
  interface Window {
    restorePlTab: () => void;
    restorePlInfo: () => void;
    restoreLightMode: () => void;
    restoreHamburguer: () => void;
    focusFilter: (id: string) => void;
  }
}
