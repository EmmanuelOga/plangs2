import "preact/debug";

import { h } from "preact";
import { useContext } from "preact/hooks";

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

  const { pg, plIdx } = pc;
  const [plangsQuery, update] = usePlangsQuery(pg);

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

function startLangFilter({ plIdx }: PlangsContext) {
  const update = () => {
    updatePlangsTable(query.value, plIdx);
  };
  query?.addEventListener("keyup", debounce(update, 50));
}

const rows = document.querySelectorAll("tr.plang") as unknown as HTMLTableRowElement[];
const query = document.querySelector("#browse-search") as HTMLInputElement;

function updatePlangsTable(query: string, plIdx: SearchIndex) {
  if (query.length === 0) {
    for (const row of rows) row.style.display = "";
  } else if (query.length === 1) {
    for (const row of rows) {
      const name = (row.children[1] as HTMLTableCellElement).innerText;
      row.style.display = name.includes(query) ? "" : "none";
    }
  } else {
    const searchResults = plIdx.search(query);
    for (const row of rows) {
      row.style.display = searchResults.has(row.id) ? "" : "none";
    }
  }
}

start("browse-nav", <Browse />, startLangFilter);
