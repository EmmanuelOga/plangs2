import "preact/debug";

import { PlangsGraph } from "@plangs/plangs";
import pgData from "@plangs/server/plangs.json";

import { registerInputCompl } from "../components/input-compl";
import { registerInputSel } from "../components/input-sel";
import { type PlInfoElement, registerPlangInfo } from "../components/pl-info";

import { elem, on } from "../utils";
import { startBrowseNav } from "./browse";
import { lastPlang } from "./last-plang";
import { connectLivereload } from "./livereload";
import { hookPlInfo } from "./pl-info";
import { setPlTab } from "./tabs";

// Declare some globals that are called as the page is being loaded to avoid flashing the wrong content.
declare global {
  interface Window {
    restorePlTab: () => void;
    restorePlInfo: () => void;
  }
}

function start() {
  registerPlangInfo();
  registerInputCompl();
  registerInputSel();

  const pg = new PlangsGraph().loadJSON(pgData);

  window.restorePlTab = () => setPlTab(lastPlang(pg));
  window.restorePlInfo = () => {
    const plInfo = elem<PlInfoElement>("plInfo");
    if (plInfo) plInfo.pl = lastPlang(pg);
  };

  document.addEventListener("DOMContentLoaded", () => {
    startBrowseNav(pg);
    hookPlInfo(pg);

    // Debugging.
    connectLivereload();
  });
}

start();
