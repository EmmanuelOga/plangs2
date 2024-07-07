import "preact/debug";

import { h } from "preact";
import { useContext } from "preact/hooks";

import { start } from "../shared/start";
import { Plangs } from "../shared/state/context";
import type { Filter, Filters } from "../shared/state/query";
import { OptionsFacet } from "./components/facets/options";

import "./browse.css";
import { PlangsTable } from "./table";

function BrowseNav({ onUpdateFilter }: { onUpdateFilter: (key: Filters, filter: Filter) => void }) {
  const pc = useContext(Plangs);

  if (!pc) return <div>Loading...</div>;
  if (pc === "error") return <div>Sorry, there's been an error loading the data.</div>;
  const { pg } = pc;

  return (
    <nav class="nav">
      <OptionsFacet
        title="Type System"
        options={[...pg.v_tsystem].map(([vid, tsys]) => [vid, tsys.name ?? vid])}
        onChange={(filter) => onUpdateFilter("typeSystems", filter)}
      />
    </nav>
  );
}

const query = document.querySelector("#browse-search") as HTMLInputElement;
const table = document.querySelector("#plangs-table") as unknown as HTMLTableElement;
const pt = new PlangsTable(query, table);

// The browser-nav is a preact component. The startup function will also start the lang filter.
start("browse-nav", <BrowseNav onUpdateFilter={(k, f) => pt.updateFilter(k, f)} />, ({ pg, plIdx }) => {
  pt.start(pg, plIdx);
});