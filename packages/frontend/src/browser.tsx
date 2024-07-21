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

const INPUTS = {
  // General
  plangName: $<HTMLInputElement>("input[name=plang-name]"),
  hasReleases: $<HTMLInputElement>("input[name=has-releases]"),
  releaseMinDate: $<HTMLInputElement>("input[name=release-min-date]"),

  // Type System
  typeSystem: $$<HTMLInputElement>("input[name=type-system]"),

  // Paradigm
  paradigm: $$<HTMLInputElement>("input[name=paradigm]"),

  // Platform
  platform: $$<HTMLInputElement>("input[name=platform]"),

  // Lineage
  influencedBy: $<InputSelElement>("input-sel[name=influenced-by]"),
  dialectOf: $<InputSelElement>("input-sel[name=dialect-of]"),
  implements: $<InputSelElement>("input-sel[name=implements]"),

  influenced: $<InputSelElement>("input-sel[name=influenced]"),
  standardFor: $<InputSelElement>("input-sel[name=standard-for]"),
  implementedWith: $<InputSelElement>("input-sel[name=implemented-with]"),

  // People
  person: $<InputSelElement>("input-sel[name=person]"),

  // License
  license: $$<HTMLInputElement>("input[name=license]"),

  // Misc
  transpiler: $<HTMLInputElement>("input[name=transpiler]"),
  hasLogo: $<HTMLInputElement>("input[name=has-logo]"),
  hasWebsite: $<HTMLInputElement>("input[name=has-website]"),
  hasWikipedia: $<HTMLInputElement>("input[name=has-wikipedia]"),

  plangExt: $<InputSelElement>("input-sel[name=plang-ext]"),
};

function collectInputs() {
  return {
    plangName: INPUTS.plangName.value,
    hasReleases: INPUTS.hasReleases.checked,
    releaseMinDate: INPUTS.releaseMinDate.value,

    typeSystems: INPUTS.typeSystem.filter((el) => el.checked).map((el) => el.value),
    paradigm: INPUTS.paradigm.filter((el) => el.checked).map((el) => el.value),
    platform: INPUTS.platform.filter((el) => el.checked).map((el) => el.value),

    influencedBy: INPUTS.influencedBy.values(),
    dialectOf: INPUTS.dialectOf.values(),
    implements: INPUTS.implements.values(),

    influenced: INPUTS.influenced.values(),
    standardFor: INPUTS.standardFor.values(),
    implementedWith: INPUTS.implementedWith.values(),

    people: INPUTS.person.values(),

    licenses: INPUTS.license.filter((el) => el.checked).map((el) => el.value),

    transpiler: INPUTS.transpiler.checked,
    hasLogo: INPUTS.hasLogo.checked,
    hasWebsite: INPUTS.hasWebsite.checked,
    hasWikipedia: INPUTS.hasWikipedia.checked,

    plangExt: INPUTS.plangExt.values(),
  };
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
    console.log(collectInputs());
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
registerInputCompl();
registerInputSel();

startBrowser();
