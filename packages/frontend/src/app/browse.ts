import { debounce } from "lodash-es";
import "preact/debug";

import type { N, NPlang, PlangsGraph } from "@plangs/plangs";
import { id } from "@plangs/server/elements";

import type { CompletionItem, InputComplElement } from "../components/input-compl";
import type { InputFacetElement } from "../components/input-facet";
import { matchingInputSelByName } from "../components/input-sel";
import type { PlInfoElement } from "../components/pl-info";
import { $$, elem, elems, minWidthBP, on, size } from "../utils";
import { getFilters } from "./filters";
import { getPl } from "./pl";
import { setPlTab } from "./tabs";

export function startBrowseNav(pg: PlangsGraph) {
  const filters = elem("filters");
  if (!filters) return;

  const extensions = elem<HTMLInputElement>("extensions");
  const extensionsSel = matchingInputSelByName(extensions);
  const plGrid = elem<HTMLDivElement>("plGrid");
  const plInfo = elem<PlInfoElement>("plInfo");
  const toggle = elem("filterToggle");

  const thumbs = elems<HTMLDivElement>("plThumb");

  if (!extensions || !extensionsSel || !plGrid || !plInfo || !toggle || thumbs.length === 0) {
    console.warn("Skipping PL browser, missing elements.", { extensions, extensionsSel, filters, plGrid, plInfo, toggle, thumbs });
    return;
  }

  for (const elem of $$<InputFacetElement>("input-facet")) {
    elem.pg = pg;
  }

  //////////////////////////////////////////////////////////////////////////////////
  // Toggle the filters.

  on(toggle, "click", () => {
    filters.classList.toggle("hidden");
    updateToggle();
  });
  const updateToggle = () => {
    const hidden = filters.classList.contains("hidden");
    toggle.classList.toggle("bg-background/75", !hidden);
  };
  updateToggle();

  //////////////////////////////////////////////////////////////////////////////////
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

  //////////////////////////////////////////////////////////////////////////////////
  // Filter the list of languages.

  function updatePlangs() {
    if (thumbs.length === 0 || plGrid === undefined) return;

    const filters = getFilters();
    const plKeys = pg.plangs(filters);
    let widthThumb: number | undefined;
    for (const div of thumbs) {
      const plKey = div.dataset.nodeKey as NPlang["key"];
      const visible = plKeys.has(plKey);
      div.classList.toggle("hidden", !visible);
      if (visible) widthThumb ??= size(div)[0];
    }
    if (widthThumb !== undefined) adjustGrid(plGrid, widthThumb, plKeys.size);
  }
  updatePlangs();

  const debouncedUpdatePlangs = debounce(updatePlangs, 30);

  window.addEventListener("resize", debouncedUpdatePlangs);

  //////////////////////////////////////////////////////////////////////////////////
  // Setup completions.

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

  //////////////////////////////////////////////////////////////////////////////////
  // Handle the file extension selection.

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

  //////////////////////////////////////////////////////////////////////////////////
  // On input change, re-filter the list of languages.

  on(filters, "input", ({ target }: InputEvent) => {
    if ((target as HTMLInputElement)?.matches(`#${id("extensions")}`)) return;
    debouncedUpdatePlangs();
  });

  //////////////////////////////////////////////////////////////////////////////////
  // On double-click, open the language page.
  on(plGrid, "dblclick", ({ target }: MouseEvent) => {
    const pl = getPl(pg, target);
    if (pl) window.location.href = `/${pl.plainKey}`;
  });

  //////////////////////////////////////////////////////////////////////////////////
  // On thumb click, display more information.

  on(plGrid, "click", ({ target }: MouseEvent) => {
    const pl = getPl(pg, target);
    if (!pl) return;
    plInfo.pl = pl;
    setPlTab(pl);
  });
}

const CSS_COLS_KEY = "grid-template-columns";

/** Adjusts the number of columns in the grid to stop the gap from growing too large. */
function adjustGrid(plGrid: HTMLElement, widthThumb: number, visibleThumbs: number) {
  const widthRow = size(plGrid)[0];
  const numCols = Math.min(Math.floor(widthRow / widthThumb), visibleThumbs);
  const maxCols = Math.floor(widthRow / (5 * 16));

  if (numCols < maxCols && visibleThumbs < maxCols && minWidthBP("48rem")) {
    plGrid.style.setProperty(CSS_COLS_KEY, `repeat(${maxCols}, minmax(8rem, 0fr))`);
  } else {
    plGrid.style.removeProperty(CSS_COLS_KEY);
  }
}
