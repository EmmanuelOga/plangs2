import { debounce } from "lodash-es";
import type { VID_Plang } from "src/schemas/entities";
import type { PlangsGraph } from "src/schemas/graph";
import { type Filter, type Filters, filterPlangs } from "../shared/state/query";
import type { SearchIndex } from "../shared/state/search";
import { walkUpBindingElementsAndPatterns } from "typescript";

declare global {
  interface HTMLTableRowElement {
    chars?: Set<string>;
  }
}

type Caption = HTMLTableCaptionElement;
type Input = HTMLInputElement;
type Table = HTMLTableElement;
type Row = HTMLTableRowElement;

export class PlangsTable {
  #pg: PlangsGraph;
  #plIdx: SearchIndex;

  #filters: Map<Filters, Filter> = new Map();

  #rows: Row[];
  #caption: Caption;

  debouncedUpdate = debounce(() => this.update(), 50);

  constructor(
    private query: Input,
    private table: Table,
  ) {
    this.#rows = this.table.querySelectorAll("tr.plang") as unknown as Row[];
    this.#caption = this.table.querySelector("caption") as Caption;

    // Initialize rows with character sets for quicker one-char query filtering.
    for (const row of this.#rows) {
      const name = (row.querySelector("td.name") as HTMLTableCellElement).innerText.toLowerCase();
      row.chars = new Set(name.split(""));
    }
  }

  start(pg: PlangsGraph, plIdx: SearchIndex) {
    this.#pg = pg;
    this.#plIdx = plIdx;
    this.query.addEventListener("keyup", this.debouncedUpdate);
    this.update();
  }

  updateFilter(key: Filters, filter: Filter) {
    this.#filters.set(key, filter);
    this.debouncedUpdate();
  }

  // Hide or show rows based on the search query.
  update() {
    const query = this.query.value.toLowerCase();

    const { includes, excludes } = filterPlangs(this.#pg, this.#filters);

    function filteredShow(vid: VID_Plang) {
      if (excludes) return !excludes.has(vid);
      if (includes) return includes.has(vid);
      return true;
    }

    function updateAllRows(rows: Row[], showCheck: (row: Row, vid: VID_Plang) => boolean): number {
      let count = 0;
      for (const row of rows) {
        if (showCheck(row, row.id as VID_Plang)) {
          row.style.display = "";
          count++;
        } else {
          row.style.display = "none";
        }
      }
      return count;
    }

    let count = 0;
    if (query.length === 0) {
      count = updateAllRows(this.#rows, (_, vid) => filteredShow(vid));
    } else if (query.length === 1) {
      // biome-ignore lint/style/noNonNullAssertion: ensured by constructor.
      count = updateAllRows(this.#rows, (row, vid) => row.chars!.has(query) && filteredShow(vid));
    } else {
      const searchResults = this.#plIdx.search(query);
      count = updateAllRows(this.#rows, (_, vid) => searchResults.has(vid) && filteredShow(vid));
    }

    this.#caption.innerText = `${count} of ${this.#rows.length} languages.`;
  }
}
