/**
 * Language facet search code.
 */
import "preact/debug";

import { PlangsGraph } from "@plangs/graph";

import { type InputComplElement, type Item, registerInputCompl } from "./input-compl";
import { type InputSelElement, registerInputSel } from "./input-sel";

function $<T = HTMLElement>(sel: string): T {
  return document.querySelector(sel) as T;
}

function $$<T = HTMLElement>(sel: string): T[] {
  return [...document.querySelectorAll(sel)] as T[];
}

async function loadPlangs(): Promise<PlangsGraph> {
  const data = await (await fetch("/plangs.json")).json();
  return new PlangsGraph().loadJSON(data);
}

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

  // On input change, re-filter the list of languages.

  $("#home-nav").addEventListener("input", (ev) => {
    console.log("Filters changed:  ", ev);
  });
}

// Register the web components.
registerInputCompl();
registerInputSel();

startBrowser();
