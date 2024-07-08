import "preact/debug";

import { h } from "preact";
import { useContext } from "preact/hooks";

import { start } from "../shared/start";
import { Plangs } from "../shared/state/context";
import type { Filter, Filters } from "../shared/state/query";
import { InputFacet } from "./components/facets/input";
import { OptionsFacet } from "./components/facets/options";
import { PlangsTable } from "./table";

import "./browse.css";

export type BrowseNavProps = {
  onUpdateFilter: (key: Filters, filter: Filter) => void;
  onUpdateQuery: (query: string) => void;
};

function BrowseNav({ onUpdateFilter, onUpdateQuery }: BrowseNavProps) {
  const pc = useContext(Plangs);

  if (!pc) return <div>Loading...</div>;
  if (pc === "error") return <div>Sorry, there's been an error loading the data.</div>;

  const { pg } = pc;
  return (
    <nav class="nav">
      <InputFacet title="Language Name" onChange={(query: string) => onUpdateQuery(query)} />
      <OptionsFacet
        title="Type System"
        options={[...pg.v_tsystem].map(([vid, tsys]) => [vid, tsys.name ?? vid])}
        onChange={(filter) => onUpdateFilter("typeSystems", filter)}
      />
    </nav>
  );
}

const table = document.querySelector("#plangs-table") as unknown as HTMLTableElement;
const pt = new PlangsTable(table);

// The browser-nav is a preact component. The startup function will also start the lang filter.
start(
  "browse-nav",
  <BrowseNav onUpdateFilter={(k, f) => pt.updateFilter(k, f)} onUpdateQuery={(q) => pt.updateQuery(q)} />,
  ({ pg, plIdx }) => pt.start(pg, plIdx),
);
