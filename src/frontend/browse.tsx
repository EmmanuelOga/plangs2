import "preact/debug";

import { Fragment, h, render } from "preact";
import { useContext, useEffect, useState } from "preact/hooks";

import { OptionsFacet } from "./components/facets/options";
import { PlangsTable } from "./components/plangs_table";
import { Plangs, type PlangsContext, loadPlangs } from "./state/plangs_context";
import { usePlangsQuery } from "./state/plangs_query";

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
          options={[...pg.typeSystems()]}
          onChange={(filter) => update({ key: "typeSystems", filter })}
        />
      </nav>

      <article class="browseContent">
        <PlangsTable pl_ids={plangsQuery.pl_ids} />
      </article>
    </>
  );
}

function App() {
  const [pg, setPg] = useState<PlangsContext>();

  useEffect(() => {
    if (pg) return;
    loadPlangs().then((pg) => setPg(pg));
  });

  return (
    <Plangs.Provider value={pg}>
      <Browse />
    </Plangs.Provider>
  );
}

function start() {
  const elem = document.getElementById("browse");
  if (!elem) throw new Error("Element not found: browse-app");
  render(<App />, elem);
}

start();
