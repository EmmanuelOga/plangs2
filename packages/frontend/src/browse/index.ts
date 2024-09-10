/**
 * Language facet search code.
 */

import { debounce } from "lodash-es";
import "preact/debug";

import { type NPlang, PlangsGraph } from "@plangs/plangs";

import { type CompletionItem, type InputComplElement, registerInputCompl } from "../input-compl";
import { type InputSelElement, registerInputSel } from "../input-sel";
import { type PlangInfoElement, registerPlangInfo } from "../plang-info";
import { $, $$, on } from "../utils";
import { checkInputs, getFilters } from "./inputs";

function startBrowseNav(pg: PlangsGraph) {
  const plangsMain = $<HTMLDivElement>("#home-plangs");
  if (!plangsMain) return;

  const plangInfo = $<PlangInfoElement>("plang-info");
  const fileExt = $<HTMLInputElement>("input#plang-ext");
  const fileExtSel = $<InputSelElement>("input-sel[name=plang-ext]");
  const releaseMin = $("label[for=release-min-date]");
  const thumbnails = $$<HTMLDivElement>(".plang-thumb");
  const infobox = $<HTMLDivElement>("#plang-infobox");
  const langTab = $<HTMLAnchorElement>("#top-nav .lang");

  if (checkInputs() === "invalid") {
    console.warn("missing elements input element for filters on the browser nav");
  }

  function updatePlangs() {
    const filters = getFilters();
    const keys = pg.plangs(filters);

    for (const div of thumbnails) {
      const nid = div.dataset.nid as NPlang["key"];
      div.classList.toggle("hide", !keys.has(nid));
    }

    // if (status) status.innerText = `Displaying ${keys.size} languages of ${pg.n_plang.size}.`;
  }

  updatePlangs();

  const debouncedUpdatePlangs = debounce(updatePlangs, 30);

  // Release data.

  on($("input#has-releases"), "input", (ev) => {
    const checked = (ev.target as HTMLInputElement).checked;
    if (releaseMin) releaseMin.classList.toggle("hide", !checked);
  });

  function completions(vtable: Iterable<any>): CompletionItem[] {
    const data: CompletionItem[] = [];
    for (const [key, value] of vtable) {
      data.push({ value: key, label: value.name, pattern: value.name.toLowerCase() });
    }
    return data;
  }

  for (const compl of $$<InputComplElement>("input-compl")) {
    const name = compl.getAttribute("name");
    const { source } = compl.dataset;

    if (source === "license") compl.completions = completions(pg.n_license);
    else if (source === "para") compl.completions = completions(pg.n_license);
    else if (source === "people") compl.completions = completions(pg.n_person);
    else if (source === "plang") compl.completions = completions(pg.n_plang);
    else if (source === "platf") compl.completions = completions(pg.n_platform);
    else if (source === "tsys") compl.completions = completions(pg.n_tsystem);
    else {
      console.warn("no completions found for", compl);
      continue;
    }

    const sel = $<InputSelElement>(`input-sel[name=${name}]`);
    if (!sel) {
      console.warn("no input-sel found for", name);
      continue;
    }

    compl.onSelect((item) => sel.addItem(item));

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
    fileExtSel.addItem({ value: name, label: name });
    fileExt.value = "";
  });

  fileExtSel?.onRemove(({ by, itemsLeft }) => {
    if (by !== "enterKey" || itemsLeft !== 0) return;
    fileExt?.focus();
  });

  // On input change, re-filter the list of languages.

  on($("#home-nav"), "input", ({ target }) => {
    if ((target as HTMLInputElement)?.matches("input[name=plang-ext]")) return;
    debouncedUpdatePlangs();
  });

  // On lang click, display more information.

  on(plangsMain, "click", ({ target }) => {
    if (!plangInfo) return;
    const wrapper = (target as HTMLElement).closest(".plang-thumb") as HTMLDivElement;
    if (!wrapper || !wrapper.dataset.key) return;
    plangInfo.key = wrapper.dataset.key as NPlang["key"];
    if (langTab) {
      langTab.classList.toggle("hide", false);
      langTab.setAttribute("href", `/${plangInfo.key.split("+").join("/")}`);
      langTab.innerText = wrapper.querySelector(".name")?.textContent ?? plangInfo.key;
    }
  });

  // On double-click, open the language page.

  on(plangsMain, "dblclick", ({ target }) => {
    const wrapper = (target as HTMLElement).closest(".plang-thumb") as HTMLDivElement;
    if (!wrapper || !wrapper.dataset.key) return;
    const key = wrapper.dataset.key;
    window.location.href = `/${key.split("+").join("/")}`;
  });

  // On click on a pl-pill in the infobox, update the infobox.

  on(infobox, "click", ({ target }) => {
    const key = (target as HTMLElement).dataset.key as NPlang["key"];
    if (plangInfo && key) plangInfo.key = key;
  });
}

// Register the web components.
registerPlangInfo();
registerInputCompl();
registerInputSel();

// Do not use top level await.
(async () => {
  const data = await (await fetch("/plangs.json")).json();
  const pg = new PlangsGraph().loadJSON(data);

  $<PlangInfoElement>("plang-info")?.setDataSource(pg);

  startBrowseNav(pg);

  try {
    // SSE listener to reload the page on changes.
    const es = new EventSource("/sse", { withCredentials: false });
    es.onmessage = () => window.location.reload();
    es.onerror = (err) => {
      console.error("SSE connection error, closing.", err);
      es.close();
    };
  } catch (err) {
    console.warn(err);
  }
})();
