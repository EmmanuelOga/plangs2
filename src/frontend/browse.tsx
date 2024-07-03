import "preact/debug";

import { Fragment, h, render } from "preact";
import { useContext, useEffect, useState } from "preact/hooks";

import { OptionsFacet } from "./components/facets/options";
import { PlangsTable } from "./components/plangs_table";
import { Plangs, loadPlangs, type PlangsContext } from "./state/plangsContext";

import "./browse.css";

function Browse() {
  const pg = useContext(Plangs);

  if (!pg) return <div>Loading...</div>;
  if (pg === "error") return <div>Sorry, there's been an error loading the data.</div>;

  return (
    <>
      <nav class="browseNav">
        <OptionsFacet
          title="Type System"
          options={[...pg.typeSystems()]}
          onChange={(f) => console.log("update table!", f)}
        />
      </nav>

      <article class="browseContent">
        <PlangsTable />
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
