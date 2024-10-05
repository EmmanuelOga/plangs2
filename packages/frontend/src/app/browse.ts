import { debounce } from "lodash-es";
import { RISON } from "rison2";

import type { E, NPlang, PlangsGraph } from "@plangs/plangs";
import type { EncodedFilter, PlangFilters } from "@plangs/plangs/filter";
import { FILTER_KEY, type IDKey, id } from "@plangs/server/elements";

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
  // Push the filters to the URL to allow sharing.

  const updateFragment = (pf: PlangFilters) => {
    const filters = pf.encodable();
    if (Object.keys(filters).length > 0) {
      window.location.hash = RISON.stringify(filters);
    } else {
      window.location.hash = "";
    }
  };

  //////////////////////////////////////////////////////////////////////////////////
  // Initialize the input facets.

  for (const elem of $$<InputFacetElement>("input-facet")) {
    elem.pg = pg;
    elem.edge = elem.dataset.edge as E;
    elem.dir = elem.dataset.dir === "inverse" ? "inverse" : "direct";
  }

  //////////////////////////////////////////////////////////////////////////////////
  // Lookup the filters 1) from the URL 2) from the local storage.

  const fragmentFilter = () => {
    try {
      const data = window.location.hash.slice(1).trim();
      if (data.length > 2 && data.startsWith("(") && data.endsWith(")")) {
        const filters = RISON.parse(data) as Record<string, EncodedFilter>;
        return filters;
      }
    } catch (e) {
      console.warn("Failed to parse URL fragment.");
      window.location.hash = "";
    }
  };

  const storedFilter = () => {
    const stored = localStorage.getItem("plangs-filters");
    if (stored) {
      try {
        const filters = JSON.parse(stored) as Record<string, EncodedFilter>;
        return filters;
      } catch (e) {
        console.warn("Failed to parse localStorage filters.", stored);
        localStorage.removeItem("plangs-filters");
      }
    }
  };

  // TODO: maybe we can turn the details into a component to hand this more elegantly.
  const loadStoredInput = (id: IDKey, value: EncodedFilter) => {
    const el = elem<HTMLInputElement>(id);
    if (!el) return;

    const tag = el.tagName.toLowerCase();
    const type = el.getAttribute("type");

    if (tag === "input") {
      if ((type === "search" || type === "month" || type === "text") && typeof value === "string") el.value = value;
      else if (type === "checkbox" && typeof value === "boolean") el.checked = value;
      else if (typeof value === "object" && "mode" in value && "values" in value) {
        const sel = matchingInputSelByName(el.getAttribute("name"));
        if (sel) {
          // I'm not sure why a timeout is necessary, but it is. Maybe some preact lifecycle thing?
          setTimeout(() => {
            for (const item of value.values) sel.addItem({ value: item, label: item });
          }, 10);
        } else {
          console.warn("Missing input-sel", { id, value });
        }
      } else {
        console.warn("Unknown input type", { id, type, value });
        return;
      }
      el.closest("details")?.setAttribute("open", "true");
      el.dataset.plFilters = "active";
    } else if (tag === "input-facet") {
      console.log("TODO");
    }
  };

  // Attempt to revive stored filters, if any.
  {
    const filters = fragmentFilter() ?? storedFilter();
    if (filters) {
      for (const key of FILTER_KEY) {
        const value = filters[key];
        if (value) loadStoredInput(key, value);
      }
      // Update the filters to whatever the outcome of the update was.
      updateFragment(getFilters());
    }
  }

  //////////////////////////////////////////////////////////////////////////////////
  // Filters toggle button.

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
    localStorage.setItem("plangs-filters", JSON.stringify(filters.encodable()));
    updateFragment(filters);
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
