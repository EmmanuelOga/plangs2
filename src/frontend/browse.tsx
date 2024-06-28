import { h, Fragment, render } from "preact";
import { useState } from "preact/hooks";

import { PlangsGraph } from "../entities/plangs_graph";

function Counter() {
  const [value, setValue] = useState(0);

  const incr = () => setValue(value + 1);
  const decr = () => setValue(value - 1);

  return (
    <>
      <div>Counter: {value}</div>
      <button type="button" onClick={decr}>decr</button>
      <button type="button" onClick={incr}>incr</button>
    </>
  );
}

async function browse() {
  const elem = document.getElementById("browse-app");
  if (!elem) throw new Error("Element not found: browse-app");
  render(<Counter />, elem);

  try {
    const req = await fetch("/plangs.json");
    const plangData = await req.json();

    const pl = new PlangsGraph();
    pl.loadJSON(plangData);

    console.log("PlangsGraph:", pl.numVertices, "vertices", pl.numEdges, "edges");

    for (const [key, val] of pl.v_tsystem) {
      console.log(val.name);
    }
  } catch (e) {
    console.error(e);
  }
}

browse();
