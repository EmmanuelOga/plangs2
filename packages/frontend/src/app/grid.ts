import { RISON } from "rison2";

import type { PlInfoElement } from "@plangs/frontend/components/pl-info";
import { $, debounce, elem, elems, minWidthBP, on, size } from "@plangs/frontend/utils";
import type { NPlang, PlangsGraph } from "@plangs/plangs";
import type { PlangFacets } from "@plangs/plangs/facets";

import { facetsFromFragment, facetsFromLocalStorage } from "./facets";
import { getPl } from "./pl";

export function startGridNav(pg: PlangsGraph) {
  // Push the filters to the URL to allow sharing.
  const updateFragment = (pf: PlangFacets) => {
    const filters = pf.encodable();
    if (Object.keys(filters).length > 0) {
      window.location.hash = RISON.stringify(filters);
    } else {
      window.location.hash = "";
    }
  };

  // Provide the graph to every facet.
  // for (const elem of $$<FacetTableElement>("input-facet")) elem.pg = pg;

  // Revive stored filters, if any.
  {
    const filters = facetsFromFragment() ?? facetsFromLocalStorage();
    if (filters) {
      // for (const key of FILTER_KEY) {
      //   const value = filters[key];
      //   // TODO: Update the facets with the value.
      // }
      // Update the filters to whatever the outcome of the update was.
      // updateFragment(getFacets());
    }
  }

  // Filter the list of languages.
  const plGrid = elem<HTMLDivElement>("plGrid");
  const thumbs = elems<HTMLDivElement>("plThumb");
  function updatePlangs() {
    if (thumbs.length === 0 || plGrid === undefined) return;
    // const filters = getFacets();

    // Save the filters to localStorage and the fragment.
    // localStorage.setItem("plangs-filters", JSON.stringify(filters.encodable()));
    // updateFragment(filters);

    // const plKeys = pg.plangs(filters);
    // let widthThumb: number | undefined;
    // for (const div of thumbs) {
    //   const plKey = div.dataset.nodeKey as NPlang["key"];
    //   const visible = plKeys.has(plKey);
    //   div.classList.toggle("hidden", !visible);
    //   if (visible) widthThumb ??= size(div)[0];
    // }
    // if (widthThumb !== undefined) adjustGrid(plGrid, widthThumb, plKeys.size);
  }
  updatePlangs();
  const debouncedUpdatePlangs = debounce(updatePlangs, 30);
  window.addEventListener("resize", debouncedUpdatePlangs);

  // On input change, re-filter the list of languages, and toggle the facet indicators.
  // on(elem("facets"), "input", ({ target }: InputEvent) => {
  //   const facet = (target as HTMLInputElement).closest(`.${cl("facet")}`);
  //   const indic = $(`.${cl("facetIndicator")}[data-facet=${facet?.id}]`);
  //   const inputs = facet?.querySelectorAll<HTMLElement>("[data-facet-input]");

  //   if (!facet || !indic || !inputs?.length) return;

  //   indic?.classList.toggle("text-primary", false);
  //   for (const input of inputs) {
  //     if (inputIsActive(input)) {
  //       indic.classList.toggle("text-primary", true);
  //       break;
  //     }
  //   }

  //   debouncedUpdatePlangs();
  // });

  // On double-click, open the language page.
  on(plGrid, "dblclick", ({ target }: MouseEvent) => {
    const pl = getPl(pg, target);
    if (pl) window.location.href = `/${pl.plainKey}`;
  });

  // On thumb click, update the pl-info plang.
  const plInfo = elem<PlInfoElement>("plInfo");
  if (plInfo) {
    on(plGrid, "click", ({ target }: MouseEvent) => {
      const pl = getPl(pg, target);
      if (!pl) return;
      plInfo.pl = pl;
    });
  }
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
