/**
 * Language facet search code.
 */
import "preact/debug";
import { debounce } from "lodash-es";

import type { PlangsGraph } from "@plangs/plangs";
import { filter } from "@plangs/plangs/filters";
import type { VID_Plang } from "@plangs/plangs/schema";

import { type InputComplElement, type Item, registerInputCompl } from "../input-compl";
import { type InputSelElement, registerInputSel } from "../input-sel";
import { type PlangInfoElement, registerPlangInfo } from "../plang-info";
import { $, $$, loadPlangs } from "../utils";
import { getFilters } from "./inputs";

const thumbnails = $$<HTMLDivElement>(".plang-thumb");

function updatePlangs(pg: PlangsGraph) {
  const filters = getFilters();
  const vids = filter(pg, filters);

  for (const div of thumbnails) {
    const vid = div.dataset.vid as VID_Plang;
    div.classList.toggle("hide", !vids.has(vid));
  }
}

async function startFacets() {
  const pg = await loadPlangs();

  // Release data.

  const releaseMin = $("label[for=release-min-date]");

  $("input#has-releases")?.addEventListener("input", (ev) => {
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

  fileExt.addEventListener("keypress", (ev: KeyboardEvent) => {
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

  $("#home-nav").addEventListener("input", (ev) => {
    const target = ev.target as HTMLInputElement;
    if (target?.matches("input[name=plang-ext]")) return;

    debouncedUpdatePlangs(pg);
  });

  // On lang click, display more information.

  const plangInfo = $<PlangInfoElement>("plang-info");

  $("#home-plangs").addEventListener("click", (ev) => {
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

startFacets();
