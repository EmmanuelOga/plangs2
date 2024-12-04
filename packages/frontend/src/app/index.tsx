import "preact/debug";

import { elem } from "@plangs/frontend/auxiliar/dom";
import { on } from "@plangs/frontend/auxiliar/events";
import { FragmentTracker } from "@plangs/frontend/auxiliar/fragment";
import { connectLivereload } from "@plangs/frontend/auxiliar/livereload";
import { activateIconButtons } from "@plangs/frontend/components/icon-button";
import { ToggleFacetsMenu, ToggleHamburguer, ToggleLights } from "@plangs/frontend/components/icon-button/state";
import { renderVertexInfo } from "@plangs/frontend/components/vertex-info";
import { activateFacetsMain } from "@plangs/frontend/facets/main";
import { PlangsGraph } from "@plangs/plangs/graph";
import { getClosestVertex } from "./vertices";

async function start() {
  const pg = new PlangsGraph();
  const loadData = fetch("/plangs.json")
    .then(async r => pg.loadJSON(await r.json()))
    .then(g => g.materialize());

  window.fragment = new FragmentTracker().bind();
  window.restoreFilters = () => ToggleFacetsMenu.initial().runEffects();
  window.restoreHamburguer = () => ToggleHamburguer.initial().runEffects();
  window.restoreLightMode = () => ToggleLights.initial().runEffects();

  document.addEventListener("DOMContentLoaded", () => {
    activateIconButtons();

    loadData.then(() => {
      activateFacetsMain(pg);

      const grid = elem("vertexGrid");
      if (!grid) return;

      // On click display the vertex info.
      on(grid, "pointerdown", ({ target }: MouseEvent) => {
        const vertex = getClosestVertex(pg, target);
        if (vertex) renderVertexInfo({ vertex });
      });

      // On double-click, open the language page.
      on(grid, "dblclick", ({ target }: MouseEvent) => {
        const pl = getClosestVertex(pg, target);
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
  }
}
