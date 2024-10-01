import "preact/debug";

import { PlangsGraph } from "@plangs/plangs";

import { registerInputCompl } from "../components/input-compl";
import { registerInputSel } from "../components/input-sel";
import { registerPlangInfo } from "../components/pl-info";

import { startBrowseNav } from "./browse";
import { connectLivereload } from "./livereload";
import { restorePlTab } from "./tabs";

// We need this ASAP to avoid FOUC.
registerPlangInfo();

// @ts-ignore for now.
window.restorePlTab = restorePlTab;

// Do not use top level await.
(async () => {
  registerInputCompl();
  registerInputSel();

  // Load the data and send it to the pl-info component.
  const data = await (await fetch("/plangs.json")).json();
  const pg = new PlangsGraph().loadJSON(data);

  // Do this "a bit later" to hopefully allow for faster first paint.
  setTimeout(() => startBrowseNav(pg));
  setTimeout(() => connectLivereload());
})();
