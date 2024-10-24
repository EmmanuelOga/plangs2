import "preact/debug";

import { elem } from "@plangs/frontend/auxiliar/utils";
import { registerIconButton } from "@plangs/frontend/components/icon-button";
import { ToggleFacetsMenu, ToggleHamburguer, ToggleLights } from "@plangs/frontend/components/icon-button/state";
import { type PlInfoElement, registerPlangInfo } from "@plangs/frontend/components/pl-info";
import { PlangsGraph } from "@plangs/plangs";
import pgData from "@plangs/server/plangs.json";

import { type FacetsMainElement, registerFacetsMain } from "../components/facets/main";
import { connectLivereload } from "./livereload";
import { lastPlang } from "./pl";

function start() {
  registerPlangInfo();
  registerIconButton();
  registerFacetsMain();

  const pg = new PlangsGraph().loadJSON(pgData);

  window.restoreFilters = () => ToggleFacetsMenu.initial().runEffects();
  window.restoreHamburguer = () => ToggleHamburguer.initial().runEffects();
  window.restoreLightMode = () => ToggleLights.initial().runEffects();

  window.restorePlInfo = () => {
    const plInfo = elem<PlInfoElement>("plInfo");
    if (plInfo) plInfo.pl = lastPlang(pg);
  };

  document.addEventListener("DOMContentLoaded", () => {
    for (const el of document.querySelectorAll<FacetsMainElement>("facets-main")) el.pg = pg;
    connectLivereload();
  });
}

start();

// Declare some globals that are called as the page is being loaded to avoid flashing the wrong content.
declare global {
  interface Window {
    focusFilter: (id: string) => void;
    restoreFilters: () => void;
    restoreHamburguer: () => void;
    restoreLightMode: () => void;
    restorePlInfo: () => void;
  }
}
