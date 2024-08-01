/**
 * Language facet search code.
 */

import { debounce } from "lodash-es";
import "preact/debug";

import type Sigma from "sigma";

import { PlangsGraph } from "@plangs/plangs";
import { filter } from "@plangs/plangs/filters";
import type { VID_Plang } from "@plangs/plangs/schema";

import { VID } from "@plangs/graph/vertex";
import { type InputComplElement, type Item, registerInputCompl } from "../input-compl";
import { type InputSelElement, registerInputSel } from "../input-sel";
import { type PlangInfoElement, registerPlangInfo } from "../plang-info";
import { $, $$, on } from "../utils";
import { layout, startMap } from "./graph";
import { checkInputs, getFilters } from "./inputs";

async function startBrowseNav(pg: PlangsGraph) {
  const plangsMain = $<HTMLDivElement>("#home-plangs");
  if (!plangsMain) return;

  const mode = plangsMain?.dataset.mode as "grid" | "map";

  let map: Sigma | undefined;
  if (mode === "map") map = startMap(plangsMain, pg);

  const plangInfo = $<PlangInfoElement>("plang-info");
  plangInfo?.setDataSource(pg);

  const fileExt = $<HTMLInputElement>("input#plang-ext");
  const fileExtSel = $<InputSelElement>("input-sel[name=plang-ext]");
  const releaseMin = $("label[for=release-min-date]");
  const thumbnails = $$<HTMLDivElement>(".plang-thumb");
  const infobox = $<HTMLDivElement>("#plang-infobox");

  if (checkInputs() === "invalid") {
    console.warn("missing elements input element for filters on the browser nav");
  }

  function updatePlangs() {
    const filters = getFilters();
    const vids = filter(pg, filters);

    if (mode === "grid") {
      for (const div of thumbnails) {
        const vid = div.dataset.vid as VID_Plang;
        div.classList.toggle("hide", !vids.has(vid));
      }
    } else if (mode === "map" && map) {
      map.clear();

      const g = map.getGraph();
      g.clear();

      /* Add nodes and edges to the graph */
      for (const [vid, plang] of pg.v_plang) {
        if (!vids.has(vid)) continue;
        g.addNode(vid, { label: plang.name, color: "yellowgreen", x: Math.random(), y: Math.random(), size: 10 });
      }

      for (const [key] of pg.e_l_influenced_l) {
        const [_, from, to] = key.split("~");
        if (!vids.has(from as VID_Plang) || !vids.has(to as VID_Plang)) continue;
        g.addEdge(from, to, { type: "arrow", label: "influenced", size: 3 });
      }

      layout(g);

      map.getCamera().animatedReset();
      map.refresh();
    }

    // if (status) status.innerText = `Displaying ${vids.size} languages of ${pg.v_plang.size}.`;
  }

  updatePlangs();

  const debouncedUpdatePlangs = debounce(updatePlangs, 30);

  // Release data.

  on($("input#has-releases"), "input", (ev) => {
    const checked = (ev.target as HTMLInputElement).checked;
    if (releaseMin) releaseMin.classList.toggle("hide", !checked);
  });

  // Completions.
  const completions = new Map<string, Item[]>([
    ["license", [...pg.v_license] as Item[]],
    ["para", [...pg.v_paradigm] as Item[]],
    ["people", [...pg.v_person] as Item[]],
    ["plang", [...pg.v_plang] as Item[]],
    ["platf", [...pg.v_platform] as Item[]],
    ["tsys", [...pg.v_tsystem] as Item[]],
  ]);

  for (const compl of $$<InputComplElement>("input-compl")) {
    const name = compl.getAttribute("name");

    const data = completions.get(compl.dataset.source ?? "");
    if (!data) continue;

    compl.completions = data;

    const sel = $<InputSelElement>(`input-sel[name=${name}]`);
    if (!sel) {
      console.warn("no input-sel found for", name);
      continue;
    }

    compl.onSelect(({ item }) => sel.addItem(item));

    sel.onRemove(({ by, itemsLeft }) => {
      if (by !== "enterKey" || itemsLeft !== 0) return;
      compl.focus();
    });
  }

  // File Extension

  on(fileExt, "keypress", ({ key }: KeyboardEvent) => {
    if (key !== "Enter" || !fileExt || !fileExtSel) return;
    const value = fileExt.value.trim();
    if (value === "") return;
    const name = (value[0] === "." ? value : `.${value}`).toLowerCase();
    fileExtSel.addItem([name, { name }]);
    fileExt.value = "";
  });

  fileExtSel?.onRemove(({ by, itemsLeft }) => {
    if (by !== "enterKey" || itemsLeft !== 0) return;
    fileExt?.focus();
  });

  // On input change, re-filter the list of languages.

  on($("#home-nav"), "input", ({ target }) => {
    if ((target as HTMLInputElement)?.matches("input[name=plang-ext]")) return;
    debouncedUpdatePlangs(pg);
  });

  // On lang click, display more information.

  if (mode === "grid") {
    on(plangsMain, "click", ({ target }) => {
      if (!plangInfo) return;
      const wrapper = (target as HTMLElement).closest(".plang-thumb") as HTMLDivElement;
      if (!wrapper || !wrapper.dataset.vid) return;
      plangInfo.vid = wrapper.dataset.vid as VID_Plang;
    });
  }

  // On click on a pl-pill in the infobox, update the infobox.

  on(infobox, "click", ({ target }) => {
    const vid = (target as HTMLElement).dataset.vid as VID_Plang;
    if (plangInfo && vid) plangInfo.vid = vid;
  });

  // TODO: on double-click, open the language page.
}

// Register the web components.
registerPlangInfo();
registerInputCompl();
registerInputSel();

// Do not use top level await.
(async () => {
  const data = await (await fetch("/plangs.json")).json();
  const pg = new PlangsGraph().loadJSON(data);
  startBrowseNav(pg);
})();

// SSE listener to reload the page on changes.
const es = new EventSource("/sse", { withCredentials: false });
es.onmessage = () => window.location.reload();
es.onerror = (err) => {
  console.error("SSE connection error, closing.", err);
  es.close();
};
