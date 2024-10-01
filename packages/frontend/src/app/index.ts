import { debounce } from "lodash-es";
import "preact/debug";

import { type N, type NPlang, PlangsGraph } from "@plangs/plangs";

import { type CompletionItem, type InputComplElement, registerInputCompl } from "../components/input-compl";
import { matchingInputSelByName, registerInputSel } from "../components/input-sel";
import { type PlInfoElement, registerPlangInfo } from "../components/pl-info";

import { $, $$, elem, elems, on } from "../utils";

import { cl, id } from "@plangs/server/elements";
import { getFilters } from "./filters";
import { connectLivereload } from "./livereload";

function startBrowseNav(pg: PlangsGraph) {
  console.info("Starting PL browser.");

  // Handle the togle of the filters.
  const [toggle, filters] = [elem("filterToggle"), elem("filters")];
  if (toggle && filters) {
    const updateToggle = () => {
      const hidden = filters.classList.contains("hidden");
      toggle.classList.toggle("bg-background/75", !hidden);
    };
    on(toggle, "click", () => {
      filters.classList.toggle("hidden");
      updateToggle();
    });
    updateToggle();
  }

  // Scroll into view when a summary is clicked.
  // TODO: use delegation.
  for (const sum of $$("summary")) {
    on<MouseEvent>(sum, "click", ({ target }) => {
      const details = (target as HTMLElement)?.closest("details");
      const aboutToOpen = details?.open === false;
      if (aboutToOpen) {
        details.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    });
  }

  const plGrid = elem<HTMLDivElement>("plGrid");
  const thumbs = elems<HTMLDivElement>("plThumb");

  function updatePlangs() {
    if (thumbs.length === 0 || plGrid === undefined) return;

    const plKeys = pg.plangs(getFilters());
    for (const div of thumbs) {
      const plKey = div.dataset.key as NPlang["key"];
      const visible = plKeys.has(plKey);
      div.classList.toggle("hidden", !visible);
    }
  }

  updatePlangs();

  const debouncedUpdatePlangs = debounce(updatePlangs, 30);

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

  const extensions = elem("extensions") as HTMLInputElement;
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

  on(elem("filters"), "input", ({ target }: InputEvent) => {
    if ((target as HTMLInputElement)?.matches(`#${id("extensions")}`)) return;
    debouncedUpdatePlangs();
  });

  // On lang click, display more information.

  function getPl(target: EventTarget | null): NPlang | undefined {
    const keyHolder = (target as Element).closest("[data-key]") as HTMLElement;
    if (!keyHolder || !keyHolder.dataset.key) return;
    return pg.nodes.pl.get(keyHolder.dataset.key as NPlang["key"]);
  }

  const plTab = elem("plTab") as HTMLAnchorElement;
  const plTabSpan = plTab.querySelector("span");
  const setTab = (pl: NPlang) => {
    if (!plTab || !plTabSpan) return;
    plTab.setAttribute("href", `/pl/${pl.plainKey}`);
    plTabSpan.innerText = pl.name;
  };

  const plInfo = elem<PlInfoElement>("plInfo");
  if (plInfo) {
    on(elem("plGrid"), "click", ({ target }: MouseEvent) => {
      const pl = getPl(target);
      if (!pl) return;
      plInfo.pl = pl;
      setTab(pl);
    });
  }

  const currentTab = () => $<HTMLAnchorElement>(`.${cl("navLink")}[data-current]`)?.dataset?.tab;

  // On click on a pl-pill in the infobox, update the infobox.
  on(plInfo, "click", ({ target }: MouseEvent) => {
    const pl = getPl(target);
    console.log(pl);
    if (!pl) return;

    const tab = currentTab();
    if (tab === "browse" && plInfo) {
      plInfo.pl = pl;
      setTab(pl);
    } else {
      window.location.href = `/pl/${pl.plainKey}`;
    }
  });

  // On double-click, open the language page.
  on(elem("plGrid"), "dblclick", ({ target }: MouseEvent) => {
    const pl = getPl(target);
    if (pl) window.location.href = `/pl/${pl.plainKey}`;
  });
}

// Do not use top level await.
(async () => {
  // Register the web components.
  registerPlangInfo();
  registerInputCompl();
  registerInputSel();

  // Load the data and send it to the pl-info component.
  const data = await (await fetch("/plangs.json")).json();
  const pg = new PlangsGraph().loadJSON(data);

  startBrowseNav(pg);

  connectLivereload();
})();
