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

import { callPrApi, generateCodeDiff, getGithubCode } from "./github";
import { getClosestVertex, loadLocalOrRemote } from "./vertices";

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
    // In the editor we may be coming back from GitHub OAuth.
    const ghCode = getGithubCode();
    if (ghCode) {
      activatePlangsEditor(pg, { kind: "loading" });
      const diff = generateCodeDiff(pg);
      activatePlangsEditor(pg, diff ? await callPrApi(ghCode, diff) : { kind: "nodiff" });
    } else {
      activatePlangsEditor(pg);
    }
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
  document.addEventListener("DOMContentLoaded", () => activateIconButtons());
  const pg = new PlangsGraph();
  loadLocalOrRemote(pg).then(() => {
    if (document.readyState === "loading") document.addEventListener("DOMContentLoaded", () => start(pg));
    else start(pg);
  });
} catch (err) {
  console.error(err);
}

if (PLANGS_ENV === "dev") {
  try {
    connectLivereload();
  } catch (err) {
    console.error(err);
  }
  // debugAspectRatio();
}
