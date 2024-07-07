import "preact/debug";

import { h } from "preact";
import { useContext } from "preact/hooks";

import { start } from "../shared/start";
import { Plangs } from "../shared/state/context";
import { OptionsFacet } from "./components/facets/options";
import { usePlangsQuery } from "./state/query";

import "./browse.css";

function Browse() {
  const pc = useContext(Plangs);

  if (!pc) return <div>Loading...</div>;
  if (pc === "error") return <div>Sorry, there's been an error loading the data.</div>;

  const { pg } = pc;
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

start("browse-nav", <Browse />);
