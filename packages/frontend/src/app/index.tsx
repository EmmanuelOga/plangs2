import "preact/debug";

import { elem } from "@plangs/frontend/auxiliar/dom";
import { on } from "@plangs/frontend/auxiliar/events";
import { FragmentTracker } from "@plangs/frontend/auxiliar/fragment";
import { connectLivereload } from "@plangs/frontend/auxiliar/livereload";
import { activateFacetsMain } from "@plangs/frontend/components/facets/main";
import { activateIconButtons } from "@plangs/frontend/components/icon-button";
import { ToggleFacetsMenu, ToggleHamburguer, ToggleLights } from "@plangs/frontend/components/icon-button/state";
import { renderLastNodeInfo, renderNodeInfo } from "@plangs/frontend/components/node-info";
import { PlangsGraph } from "@plangs/plangs";

import { getPl } from "./pl";

async function start() {
  const pg = new PlangsGraph();
  const loadData = fetch("/plangs.json").then(async r => pg.loadJSON(await r.json()));

  window.fragment = new FragmentTracker().bind();
  window.restoreFilters = () => ToggleFacetsMenu.initial().runEffects();
  window.restoreHamburguer = () => ToggleHamburguer.initial().runEffects();
  window.restoreLightMode = () => ToggleLights.initial().runEffects();
  window.restoreNodeInfo = () => renderLastNodeInfo(pg); // NOTE: this doesn't need the fully loaded data.

  document.addEventListener("DOMContentLoaded", () => {
    activateIconButtons();

    loadData.then(() => {
      activateFacetsMain(pg);

      const grid = elem("nodeGrid");
      if (!grid) return;

      on(grid, "pointerdown", ({ target }: MouseEvent) => {
        const pl = getPl(pg, target);
        if (pl) renderNodeInfo({ node: pl, tab: "plangs" });
      });

      // On double-click, open the language page.
      on(grid, "dblclick", ({ target }: MouseEvent) => {
        const pl = getPl(pg, target);
        if (pl) window.location.href = `/${pl.plainKey}`;
      });
    });
  });
}

// This is a global variable that is set by the build system.
declare const DEVEL: boolean;
if (DEVEL) {
  try {
    connectLivereload();
  } catch (err) {
    console.error(err);
  }
}

start();

// Declare some globals that are called as the page is being loaded to avoid flashing the wrong content.
declare global {
  interface Window {
    fragment: FragmentTracker;
    restoreFilters: () => void;
    restoreHamburguer: () => void;
    restoreLightMode: () => void;
    restoreNodeInfo: () => void;
  }
}
