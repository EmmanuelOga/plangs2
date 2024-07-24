/**
 * Language facet search code.
 */

import { debounce } from "lodash-es";
import "preact/debug";

import { PlangsGraph } from "@plangs/plangs";
import { filter } from "@plangs/plangs/filters";
import type { VID_Plang } from "@plangs/plangs/schema";

import { type InputComplElement, type Item, registerInputCompl } from "../input-compl";
import { type InputSelElement, registerInputSel } from "../input-sel";
import { type PlangInfoElement, registerPlangInfo } from "../plang-info";
import { $, $$, on } from "../utils";
import { checkInputs, getFilters } from "./inputs";

async function startFacets(pg: PlangsGraph) {
  const fileExt = $<HTMLInputElement>("input#plang-ext");
  const fileExtSel = $<InputSelElement>("input-sel[name=plang-ext]");
  const plangInfo = $<PlangInfoElement>("plang-info");
  const releaseMin = $("label[for=release-min-date]");
  const status = $<HTMLSpanElement>("#status");
  const thumbnails = $$<HTMLDivElement>(".plang-thumb");
  const infobox = $<HTMLDivElement>("#plang-infobox");

  if (!(fileExt && fileExtSel && plangInfo && releaseMin && status && thumbnails.length > 0 && infobox)) {
    console.warn("missing elements for startFacets");
  }

  if (checkInputs() === "invalid") {
    console.warn("missing elements input element for filters on the browser nav");
  }

  plangInfo?.setDataSource(pg);

  function updatePlangs(pg: PlangsGraph) {
    const filters = getFilters();
    const vids = filter(pg, filters);
    for (const div of thumbnails) {
      const vid = div.dataset.vid as VID_Plang;
      div.classList.toggle("hide", !vids.has(vid));
    }
    if (status) status.innerText = `Displaying ${vids.size} languages of ${pg.v_plang.size}.`;
  }

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

  on($("#home-plangs"), "click", ({ target }) => {
    if (!plangInfo) return;
    const wrapper = (target as HTMLElement).closest(".plang-thumb") as HTMLDivElement;
    if (!wrapper || !wrapper.dataset.vid) return;
    plangInfo.vid = wrapper.dataset.vid as VID_Plang;
  });

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
  startFacets(pg);
})();

// SSE listener to reload the page on changes.
new EventSource("/sse", { withCredentials: false }).onmessage = () => {
  window.location.reload();
};
