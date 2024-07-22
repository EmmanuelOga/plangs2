/**
 * Language facet search code.
 */
import "preact/debug";

import { $, $$, loadPlangs } from "../utils";

import { type InputComplElement, type Item, registerInputCompl } from "../input-compl";
import { type InputSelElement, registerInputSel } from "../input-sel";
import { getNavState } from "./inputs";
import { registerPlangInfo } from "../plang-info";

function updatePlangs() {}

async function startBrowser() {
  const pg = await loadPlangs();

  // Release data.

  const releaseMin = $("label[for=release-min-date]");

  $("input#has-releases")?.addEventListener("input", (ev) => {
    const checked = (ev.target as HTMLInputElement).checked;
    releaseMin.classList.toggle("hide", !checked);
  });

  // Completions.

  const langCompletions = [...pg.v_plang] as Item[];
  const peopleCompletions = [...pg.v_person] as Item[];

  for (const compl of $$<InputComplElement>("input-compl")) {
    const name = compl.getAttribute("name");

    compl.completions = name === "person" ? peopleCompletions : langCompletions;

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
    const value = fileExt.value;
    if (value === "") return;
    const name = value[0] === "." ? value : `.${value}`;
    fileExtSel.addItem([name, { name }]);
    fileExt.value = "";
  });

  fileExtSel.onRemove(({ by, itemsLeft }) => {
    if (by !== "enterKey" || itemsLeft !== 0) return;
    fileExt.focus();
  });

  // On input change, re-filter the list of languages.

  $("#home-nav").addEventListener("input", (ev) => {
    const target = ev.target as HTMLInputElement;
    if (target?.matches("input[name=plang-ext]")) return;

    console.log(ev.target);
  });

  // On lang click, display more information.

  $("#home-plangs").addEventListener("click", (ev) => {
    const target = ev.target as HTMLElement;
    const wrapper = target.closest(".plang-thumb") as HTMLDivElement;
    if (!wrapper) return;
    console.log("Plang clicked: ", wrapper.dataset.vid);
  });
}

// Register the web components.
registerPlangInfo();
registerInputCompl();
registerInputSel();

startBrowser();
