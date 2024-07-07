import "preact/debug";

import { h } from "preact";
import { useContext, useLayoutEffect } from "preact/hooks";

import { debounce } from "lodash-es";

import { start } from "../shared/start";
import { Plangs, type PlangsContext, type SearchIndex } from "../shared/state/context";
import { OptionsFacet } from "./components/facets/options";
import { usePlangsQuery } from "./state/query";

import "./browse.css";

function Browse() {
  const pc = useContext(Plangs);

  if (!pc) return <div>Loading...</div>;
  if (pc === "error") return <div>Sorry, there's been an error loading the data.</div>;

  const { pg } = pc;
  const [plangsQuery, update] = usePlangsQuery(pg);

  useLayoutEffect(() => {
    console.log("New Ids", plangsQuery.pl_ids);
  });

  return (
    <nav class="nav">
      <OptionsFacet
        title="Type System"
        options={[...pg.v_tsystem].map(([vid, tsys]) => [vid, tsys.name ?? vid])}
        onChange={(filter) => update({ key: "typeSystems", filter })}
      />
    </nav>
  );
}

const query = document.querySelector("#browse-search") as HTMLInputElement;
function startLangFilter({ plIdx }: PlangsContext) {
  const update = () => {
    updatePlangsTable(query.value.toLowerCase(), plIdx);
  };
  query?.addEventListener("keyup", debounce(update, 50));
}

// Initialize rows with character sets for quicker filtering.
const rows = document.querySelectorAll("tr.plang") as unknown as HTMLTableRowElement[];
declare global {
  interface HTMLTableRowElement {
    chars?: Set<string>;
  }
}
for (const row of rows) {
  const name = (row.querySelector("td.name") as HTMLTableCellElement).innerText.toLowerCase();
  row.chars = new Set(name.split(""));
}

function updatePlangsTable(query: string, plIdx: SearchIndex) {
  if (query.length === 0) {
    for (const row of rows) row.style.display = "";
  } else if (query.length === 1) {
    for (const row of rows) {
      // biome-ignore lint/style/noNonNullAssertion: ensured by the loop above.
      row.style.display = row.chars!.has(query) ? "" : "none";
    }
  } else {
    const searchResults = plIdx.search(query);
    for (const row of rows) {
      row.style.display = searchResults.has(row.id) ? "" : "none";
    }
  }
}

start("browse-nav", <Browse />, startLangFilter);
