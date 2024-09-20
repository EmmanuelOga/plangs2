import { debounce } from "lodash-es";
import "preact/debug";

import { type N, type NPlang, PlangsGraph } from "@plangs/plangs";

import { type CompletionItem, type InputComplElement, registerInputCompl } from "../components/input-compl";
import { matchingInputSelByName, registerInputSel } from "../components/input-sel";
import { type PlInfoElement, registerPlangInfo } from "../components/pl-info";

import { $, $$, on } from "../utils";

import { getDom } from "./dom";
import { getFilters } from "./filters";
import { connectLivereload } from "./livereload";

function startBrowseNav(pg: PlangsGraph, dom: ReturnType<typeof getDom>) {
  function updatePlangs() {
    const filters = getFilters(dom.inputs);
    const keys = pg.plangs(filters);

    for (const div of dom.elems.plThumb) {
      const nodeId = div.dataset.key as NPlang["key"];
      div.classList.toggle("hide", !keys.has(nodeId));
    }
    // if (status) status.innerText = `Displaying ${keys.size} languages of ${pg.n_plang.size}.`;
  }

  updatePlangs();

  const debouncedUpdatePlangs = debounce(updatePlangs, 30);

  // Release data.

  on(dom.inputs.hasReleases, "input", ({ target }) => {
    const checked = (target as HTMLInputElement).checked;
    dom.inputs.releasedAfter.closest("label")?.classList.toggle("hide", !checked);
  });

  // Completions.

  function completions(nodeKind: N): CompletionItem[] {
    const data: CompletionItem[] = [];
    for (const [key, node] of pg.nodes[nodeKind]) {
      data.push({ value: key, label: node.data.name ?? key, pattern: (node.data.name ?? key).toLowerCase() });
    }
    return data;
  }

  for (const compl of $$<InputComplElement>("input-compl")) {
    const [inputSel, source] = [matchingInputSelByName(compl), compl.dataset.kind as N];
    if (!inputSel) continue;
    if (!pg.nodes[source]) {
      continue;
    }
    compl.completions = completions(source);
    compl.onSelect(item => inputSel.addItem(item));
    inputSel.onRemove(({ by, itemsLeft }) => {
      if (by === "enterKey" && itemsLeft === 0) compl.focus();
    });
  }

  // File Extension

  const extensions = dom.inputs.extensions as HTMLInputElement;
  const extensionsSel = matchingInputSelByName(extensions);

  if (extensions && extensionsSel) {
    on(extensions, "keypress", ({ key }: KeyboardEvent) => {
      if (key !== "Enter") return;
      const value = extensions.value.trim();
      if (value === "") return;
      const name = (value[0] === "." ? value : `.${value}`).toLowerCase();
      extensionsSel.addItem({ value: name, label: name });
      extensions.value = "";
    });
    extensionsSel.onRemove(({ by, itemsLeft }) => {
      if (by !== "enterKey" || itemsLeft !== 0) return;
      extensions.focus();
    });
  }

  // On input change, re-filter the list of languages.

  on(dom.elem.nav, "input", ({ target }) => {
    if ((target as HTMLInputElement)?.matches("input[name=plang-ext]")) return;
    debouncedUpdatePlangs();
  });

  // On lang click, display more information.

  function getPl(target: EventTarget | null): NPlang | undefined {
    const keyHolder = (target as Element).closest("[data-key]") as HTMLElement;
    if (!keyHolder || !keyHolder.dataset.key) return;
    return pg.nodes.pl.get(keyHolder.dataset.key as NPlang["key"]);
  }

  const plangInfo = dom.elem.plangInfo as PlangInfoElement;
  const langTab = document.querySelector("#top-nav .lang") as HTMLDivElement;
  if (plangInfo) {
    on(dom.elem.plangs, "click", ({ target }) => {
      const pl = getPl(target);
      if (!pl) return;
      plangInfo.key = pl.key;
      console.log("SETTING KEY", pl.key, plangInfo.key, plangInfo);
      if (!langTab) return;
      langTab.classList.toggle("hide", false);
      langTab.setAttribute("href", `/pl/${pl.plainKey}`);
      langTab.innerText = pl.name;
    });
  }

  // On double-click, open the language page.

  on(dom.elem.plangs, "dblclick", ({ target }) => {
    const pl = getPl(target);
    if (pl) window.location.href = `/pl/${pl.plainKey}`;
  });

  // On click on a pl-pill in the infobox, update the infobox.

  on(dom.elem.plangInfo, "click", ({ target }) => {
    const pl = getPl(target);
    if (pl) plangInfo.key = pl.key;
  });
}

// Do not use top level await.
(async () => {
  connectLivereload();

  // Register the web components.
  registerPlangInfo();
  registerInputCompl();
  registerInputSel();

  const data = await (await fetch("/plangs.json")).json();
  const pg = new PlangsGraph().loadJSON(data);

  $<PlInfoElement>("plang-info")?.setDataSource(pg);

  const dom = getDom();

  if (dom.elem.facets) startBrowseNav(pg, dom);
})();
