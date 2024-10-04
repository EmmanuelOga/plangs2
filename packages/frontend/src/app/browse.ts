import { debounce } from "lodash-es";
import { RISON } from "rison2";

import type { E, NPlang, PlangsGraph } from "@plangs/plangs";
import { id } from "@plangs/server/elements";

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
  const extensionsSel = matchingInputSelByName(extensions?.getAttribute("name"));
  const plGrid = elem<HTMLDivElement>("plGrid");
  const plInfo = elem<PlInfoElement>("plInfo");
  const toggle = elem("filterToggle");
  const inputFilters = elems<HTMLInputElement>("inputFilter");

  const thumbs = elems<HTMLDivElement>("plThumb");

  if (!extensions || !extensionsSel || !plGrid || !plInfo || !toggle || thumbs.length === 0 || inputFilters.length === 0) {
    console.warn("Skipping PL browser, missing elements.", { extensions, extensionsSel, filters, plGrid, plInfo, toggle, thumbs, inputFilters });
    return;
  }

  for (const elem of $$<InputFacetElement>("input-facet")) {
    elem.pg = pg;
    elem.edge = elem.dataset.edge as E;
    elem.dir = elem.dataset.dir === "inverse" ? "inverse" : "direct";
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
  // When an input filter has a non-empty value, add the active data attribute.

  for (const input of inputFilters) {
    on(input, "input", () => {
      if (input.getAttribute("type") === "checkbox") {
        input.dataset.plFilters = input.checked ? "active" : "";
        return;
      }
      input.dataset.plFilters = input.value.trim() !== "" ? "active" : "";
    });
  }

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

  // Push the filters to the URL to allow sharing.
  const updateFragment = () => {
    const filters = getFilters().encodable();
    if (Object.keys(filters).length > 0) {
      window.location.hash = RISON.stringify(filters);
    } else {
      window.location.hash = "";
    }
  };

  // We don't need to do this as often.
  const debouncedUpdateFragment = debounce(updateFragment, 250);

  on(filters, "input", ({ target }: InputEvent) => {
    if ((target as HTMLInputElement)?.matches(`#${id("extensions")}`)) return;
    debouncedUpdatePlangs();
    debouncedUpdateFragment();
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
