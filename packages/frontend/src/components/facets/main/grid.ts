import { debounce, minWidthBP } from "@plangs/frontend/auxiliar/utils";
import type { NPlang } from "@plangs/plangs";
import { elems } from "@plangs/server/elements";

/** A static thumbnail grid will be render server side, we just need to show or hide each element.  */
export function doUpdateThumbns(nodeKeys: Set<string>) {
  for (const div of elems("plThumb")) {
    const plKey = div.dataset.nodeKey as NPlang["key"];
    const visible = nodeKeys.has(plKey);
    div.classList.toggle("hidden", !visible);
  }
  adjustGrid();
}

export const updateThumbns = debounce(doUpdateThumbns, 30);

const CSS_COLS_KEY = "grid-template-columns";

/** Adjusts the number of columns in the grid to stop the gap from growing too large. */
function doAdjustGrid() {
  // const grid = ... // TODO: query the grid container.
  const widthRow = 0; // size(grid).width;
  const widthThumb = 0; // TODO: query the first visible thumbnail's width.
  const visibleThumbs = 0; // TODO: query the number of visible thumbnails.
  const numCols = Math.min(Math.floor(widthRow / widthThumb), visibleThumbs);
  const maxCols = Math.floor(widthRow / (5 * 16));

  if (numCols < maxCols && visibleThumbs < maxCols && minWidthBP("48rem")) {
    // grid.style.setProperty(CSS_COLS_KEY, `repeat(${maxCols}, minmax(8rem, 0fr))`);
  } else {
    // grid.style.removeProperty(CSS_COLS_KEY);
  }
}

// TODO: register this on start.
// window.addEventListener("resize", debouncedUpdatePlangs);
export const adjustGrid = debounce(doAdjustGrid, 30);
