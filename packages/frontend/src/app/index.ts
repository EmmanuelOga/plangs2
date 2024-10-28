import "preact/debug";

import { elem, on } from "@plangs/frontend/auxiliar/utils";
import { registerIconButton } from "@plangs/frontend/components/icon-button";
import { ToggleFacetsMenu, ToggleHamburguer, ToggleLights } from "@plangs/frontend/components/icon-button/state";
import { type PlInfoElement, registerPlangInfo } from "@plangs/frontend/components/pl-info";
import { PlangsGraph } from "@plangs/plangs";

import { type FacetsMainElement, registerFacetsMain } from "../components/facets/main";
import { connectLivereload } from "./livereload";
import { getPl, lastPlang } from "./pl";

async function start() {
  registerPlangInfo();
  registerIconButton();
  registerFacetsMain();

  window.restoreFilters = () => ToggleFacetsMenu.initial().runEffects();
  window.restoreHamburguer = () => ToggleHamburguer.initial().runEffects();
  window.restoreLightMode = () => ToggleLights.initial().runEffects();
  window.restorePlInfo = () => {
    const plInfo = elem<PlInfoElement>("plInfo");
    if (plInfo) plInfo.pl = lastPlang(pg);
  };

  const pg = new PlangsGraph();
  const loadData = fetch("/plangs.json").then(async r => pg.loadJSON(await r.json()));

  document.addEventListener("DOMContentLoaded", () => {
    // Once the data is loaded, update the facets-main elements.
    loadData.then(() => {
      for (const el of document.querySelectorAll<FacetsMainElement>("facets-main")) el.pg = pg;

      const grid = elem<HTMLDivElement>("plGrid");
      const plInfo = elem<PlInfoElement>("plInfo");

      // On thumb click, update the pl-info plang.
      on(grid, "click", ({ target }: MouseEvent) => {
        const pl = getPl(pg, target);
        if (pl && plInfo) plInfo.pl = pl;
      });

      // On double-click, open the language page.
      on(grid, "dblclick", ({ target }: MouseEvent) => {
        const pl = getPl(pg, target);
        if (pl) window.location.href = `/${pl.plainKey}`;
      });
    });
  });
}

// TODO: only during development.
connectLivereload();

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
