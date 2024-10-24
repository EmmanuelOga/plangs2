import "preact/debug";

import { elem, handler, on } from "@plangs/frontend/auxiliar/utils";
import { registerIconButton } from "@plangs/frontend/components/icon-button";
import { ToggleFacetsMenu, ToggleHamburguer, ToggleLights } from "@plangs/frontend/components/icon-button/state";
import { type PlInfoElement, registerPlangInfo } from "@plangs/frontend/components/pl-info";
import { PlangsGraph } from "@plangs/plangs";
import pgData from "@plangs/server/plangs.json";

import { type FacetsMainElement, registerFacetsMain } from "../components/facets/main";
import { connectLivereload } from "./livereload";
import { getPl, lastPlang } from "./pl";

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
    // Provide the graph instance to all facets-main elements.
    for (const el of document.querySelectorAll<FacetsMainElement>("facets-main")) el.pg = pg;

    // On double-click, open the language page.
    on(elem<HTMLDivElement>("plGrid"), "dblclick", ({ target }: MouseEvent) => {
      const pl = getPl(pg, target);
      if (pl) window.location.href = `/${pl.plainKey}`;
    });

    // On thumb click, update the pl-info plang.
    on(
      elem("plInfo"),
      "click",
      handler((target: PlInfoElement) => {
        const pl = getPl(pg, target);
        if (!pl) return;
        target.pl = pl;
      }),
    );
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
