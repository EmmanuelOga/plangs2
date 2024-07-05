import "preact/debug";

import { Fragment, h } from "preact";
import { useContext } from "preact/hooks";

import { start } from "../shared/start";
import { Plangs } from "../shared/state/context";
import { OptionsFacet } from "./components/facets/options";
import { PlangsTable } from "./components/table/plangs";
import { usePlangsQuery } from "./state/query";

import "./browse.css";

function Browse() {
  const pg = useContext(Plangs);

  if (!pg) return <div>Loading...</div>;
  if (pg === "error") return <div>Sorry, there's been an error loading the data.</div>;

  const [plangsQuery, update] = usePlangsQuery(pg);

  return (
    <>
      <nav class="browseNav">
        <OptionsFacet
          title="Type System"
          options={[...pg.v_tsystem].map(([vid, tsys]) => [vid, tsys.name ?? vid])}
          onChange={(filter) => update({ key: "typeSystems", filter })}
        />
      </nav>

      <article class="browseContent">
        <PlangsTable pl_ids={plangsQuery.pl_ids} allRowsCount={pg.v_plang.size} />
      </article>
    </>
  );
}

start("browse", <Browse />);
