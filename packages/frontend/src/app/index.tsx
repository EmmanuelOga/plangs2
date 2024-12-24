import "preact/debug";

import { elem, elems } from "@plangs/frontend/auxiliar/dom";
import { on } from "@plangs/frontend/auxiliar/events";
import { FragmentTracker } from "@plangs/frontend/auxiliar/fragment";
import { connectLivereload } from "@plangs/frontend/auxiliar/livereload";
import { activateIconButtons } from "@plangs/frontend/components/icon-button";
import { ToggleFacetsMenu, ToggleHamburguer, ToggleLights } from "@plangs/frontend/components/icon-button/state";
import { renderVertexInfo } from "@plangs/frontend/components/vertex-info";
import { activateFacetsMain } from "@plangs/frontend/facets/main";
import { PlangsGraph } from "@plangs/plangs/graph";
import { debugAspectRatio } from "../auxiliar/aspect";
import { getClosestVertex } from "./vertices";

async function start() {
  const pg = new PlangsGraph();
  const loadData = fetch("/plangs.json")
    .then(async r => pg.loadJSON(await r.json()))
    .then(g => g.materialize());

  document.addEventListener("DOMContentLoaded", () => {
    activateIconButtons();

    loadData.then(() => {
      activateFacetsMain(pg);

      const grid = elem("vertexGrid");
      if (!grid) return;

      // On click display the vertex info.
      on(grid, "pointerdown", ({ target }: MouseEvent) => {
        const vertex = getClosestVertex(pg, target);
        renderVertexInfo(vertex);
      });

      // Replace placeholders with the actual images, if any.
      for (const img of elems("vertexThumbnImg")) {
        const src = img.dataset.src;
        if (src) img.setAttribute("src", src);
      }
    });
  });
}

// This is a global variable that is set by the build system.
declare const PLANGS_ENV: "dev" | "prod";
if (PLANGS_ENV === "dev") {
  try {
    connectLivereload();
  } catch (err) {
    console.error(err);
  }
  debugAspectRatio();
}

try {
  start();
} catch (err) {
  console.error(err);
}

// Declare some globals that are called as the page is being loaded
// to avoid flashing the wrong content.
//
// This causes some layout shift during the page load, which may
// add a few ms to the page load time, but it's worth it to avoid
// the flicker.
declare global {
  interface Window {
    fragment: FragmentTracker;
    restoreFilters: () => void;
    restoreHamburguer: () => void;
    restoreLightMode: () => void;
    restoreVertexInfo: () => void;
  }
}

window.fragment = new FragmentTracker().bind();

window.restoreFilters = () => ToggleFacetsMenu.initial().runEffects();
window.restoreHamburguer = () => ToggleHamburguer.initial().runEffects();
window.restoreLightMode = () => ToggleLights.initial().runEffects();
window.restoreVertexInfo = () => renderVertexInfo();
