import "preact/debug";

import { elem } from "@plangs/frontend/auxiliar/dom";
import { on } from "@plangs/frontend/auxiliar/events";
import { FragmentTracker } from "@plangs/frontend/auxiliar/fragment";
import { connectLivereload } from "@plangs/frontend/auxiliar/livereload";
import { activateIconButtons } from "@plangs/frontend/components/icon-button";
import { ToggleFacetsMenu, ToggleHamburguer, ToggleLights } from "@plangs/frontend/components/icon-button/state";
import { renderLastVertexInfo, renderVertexInfo } from "@plangs/frontend/components/vertex-info";
import { activateFacetsMain } from "@plangs/frontend/facets/main";
import { PlangsGraph } from "@plangs/plangs/graph";

import { getPl } from "./pl";

async function start() {
  const pg = new PlangsGraph();
  const loadData = fetch("/plangs.json")
    .then(async r => pg.loadJSON(await r.json()))
    .then(g => g.materialize());

  window.fragment = new FragmentTracker().bind();
  window.restoreFilters = () => ToggleFacetsMenu.initial().runEffects();
  window.restoreHamburguer = () => ToggleHamburguer.initial().runEffects();
  window.restoreLightMode = () => ToggleLights.initial().runEffects();
  window.restoreVertexInfo = () => renderLastVertexInfo(pg); // NOTE: this doesn't need the fully loaded data.

  document.addEventListener("DOMContentLoaded", () => {
    activateIconButtons();

    loadData.then(() => {
      activateFacetsMain(pg);

      const grid = elem("vertexGrid");
      if (!grid) return;

      on(grid, "pointerdown", ({ target }: MouseEvent) => {
        const pl = getPl(pg, target);
        if (pl) renderVertexInfo({ vertex: pl, tab: "plangs" });
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
    restoreVertexInfo: () => void;
  }
}
