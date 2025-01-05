import "preact/debug";

import { elem, elems } from "@plangs/frontend/auxiliar/dom";
import { on } from "@plangs/frontend/auxiliar/events";
import { FragmentTracker } from "@plangs/frontend/auxiliar/fragment";
import { connectLivereload } from "@plangs/frontend/auxiliar/livereload";
import { getCurrentPage } from "@plangs/frontend/auxiliar/storage";
import { activateIconButtons } from "@plangs/frontend/components/icon-button";
import { ToggleFacetsMenu, ToggleHamburguer, ToggleLights } from "@plangs/frontend/components/icon-button/state";
import { renderVertexInfo } from "@plangs/frontend/components/vertex-info";
import { activatePlangsEditor } from "@plangs/frontend/editor";
import { activateFacetsMain } from "@plangs/frontend/facets/main";
import { PlangsGraph } from "@plangs/plangs/graph";

import { handleGithubCallback } from "./github";
import { getClosestVertex, loadLocalOrRemote } from "./vertices";

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

// Setup prefetching of links on hover.
document.addEventListener("mouseover", event => {
  const link = event.target as HTMLElement;
  const url = link.getAttribute("href");
  if (!url || link?.tagName !== "A" || !link.classList.contains("prefetch")) return;

  link.classList.remove("prefetch");

  const linkElement = document.createElement("link");
  linkElement.rel = "prefetch";
  linkElement.href = url;
  document.head.appendChild(linkElement);
});

async function start(pg: PlangsGraph) {
  if (getCurrentPage() === "edit") {
    // If we are in edit mode, activate the editor.
    // We may also be coming back from GitHub OAuth, so we need to handle that.
    activatePlangsEditor(pg, await handleGithubCallback(pg));
    return;
  }

  const grid = elem("vertexGrid");
  if (!grid) return;

  activateFacetsMain(pg);

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
}

try {
  console.log("Starting the App.");
  activateIconButtons();
  const pg = new PlangsGraph();
  loadLocalOrRemote(pg).then(() => {
    if (document.readyState === "loading") document.addEventListener("DOMContentLoaded", () => start(pg));
    else start(pg);
  });
} catch (err) {
  console.error(err);
}

// This is a global variable that is set by the build system.
declare const PLANGS_ENV: "dev" | "prod";
if (PLANGS_ENV === "dev") {
  try {
    connectLivereload();
  } catch (err) {
    console.error(err);
  }
  // debugAspectRatio();
}
