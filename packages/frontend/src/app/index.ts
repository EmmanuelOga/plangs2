import "preact/debug";

import { PlangsGraph } from "@plangs/plangs";
import pgData from "@plangs/server/plangs.json";

import { registerInputCompl } from "../components/input-compl";
import { registerInputFacet } from "../components/input-facet";
import { registerInputSel } from "../components/input-sel";
import { registerInputToggle } from "../components/input-toggle";
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
  }
}
