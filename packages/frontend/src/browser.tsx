import "preact/debug";

import { PlangsGraph } from "@plangs/graph";

import {
  type InputComplElement,
  type Item,
  onSelect,
  registerInputCompl,
  requestFocus,
} from "./input-compl/input-compl";
import { type InputSelElement, addItem, onRemove, registerInputSel } from "./input-sel/input-sel";

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

    onSelect(compl, ({ item }) => addItem(sel, item));
    
    onRemove(sel, ({ by, itemsLeft }) => {
      if (by !== "enterKey" || itemsLeft !== 0) return;
      requestFocus(compl);
    });
  }

  // File Extension

  const fileExt = $("input#plan-ext");
}

// Register the web components.
registerInputCompl();
registerInputSel();

startBrowser();
