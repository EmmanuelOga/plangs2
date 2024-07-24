/**
 * Language facet search code.
 */

import "preact/debug";
import { debounce } from "lodash-es";

import { PlangsGraph } from "@plangs/plangs";
import { filter } from "@plangs/plangs/filters";
import type { VID_Plang } from "@plangs/plangs/schema";

import { type InputComplElement, type Item, registerInputCompl } from "../input-compl";
import { type InputSelElement, registerInputSel } from "../input-sel";
import { type PlangInfoElement, registerPlangInfo } from "../plang-info";
import { $, $$, on } from "../utils";
import { getFilters } from "./inputs";

const status = $<HTMLSpanElement>("#status");
const plangInfo = $<PlangInfoElement>("plang-info");
const thumbnails = $$<HTMLDivElement>(".plang-thumb");

function updatePlangs(pg: PlangsGraph) {
  const filters = getFilters();
  const vids = filter(pg, filters);

  for (const div of thumbnails) {
    const vid = div.dataset.vid as VID_Plang;
    div.classList.toggle("hide", !vids.has(vid));
  }

  status.innerText = `Displaying ${vids.size} languages of ${pg.v_plang.size}.`;
}

async function startFacets(pg: PlangsGraph) {
  // Release data.

  const releaseMin = $("label[for=release-min-date]");

  on($("input#has-releases"), "input", (ev) => {
    const checked = (ev.target as HTMLInputElement).checked;
    releaseMin.classList.toggle("hide", !checked);
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
      console.log("Warning: no input-sel found for", name);
      continue;
    }

    compl.onSelect(({ item }) => sel.addItem(item));

    sel.onRemove(({ by, itemsLeft }) => {
      if (by !== "enterKey" || itemsLeft !== 0) return;
      compl.focus();
    });
  }

  // File Extension

  const fileExt = $<HTMLInputElement>("input#plang-ext");
  const fileExtSel = $<InputSelElement>("input-sel[name=plang-ext]");

  on(fileExt, "keypress", (ev: KeyboardEvent) => {
    if (ev.key !== "Enter") return;
    const value = fileExt.value.trim();
    if (value === "") return;
    const name = (value[0] === "." ? value : `.${value}`).toLowerCase();
    fileExtSel.addItem([name, { name }]);
    fileExt.value = "";
  });

  fileExtSel.onRemove(({ by, itemsLeft }) => {
    if (by !== "enterKey" || itemsLeft !== 0) return;
    fileExt.focus();
  });

  // On input change, re-filter the list of languages.

  const debouncedUpdatePlangs = debounce(updatePlangs, 300);

  on($("#home-nav"), "input", (ev) => {
    const target = ev.target as HTMLInputElement;
    if (target?.matches("input[name=plang-ext]")) return;

    debouncedUpdatePlangs(pg);
  });

  // On lang click, display more information.

  on($("#home-plangs"), "click", (ev) => {
    const target = ev.target as HTMLElement;
    const wrapper = target.closest(".plang-thumb") as HTMLDivElement;
    if (!wrapper || !wrapper.dataset.vid) return;
    plangInfo.vid = wrapper.dataset.vid as VID_Plang;
  });
}

// Register the web components.
registerPlangInfo();
registerInputCompl();
registerInputSel();

export async function loadPlangs(): Promise<PlangsGraph> {
  const data = await (await fetch("/plangs.json")).json();
  return new PlangsGraph().loadJSON(data);
}

// Do not use top level await.
(async () => {
  const pg = await loadPlangs();
  startFacets(pg);
})();
