// biome-ignore lint/style/useImportType: h is needed for JSX.
import { Fragment, h, render } from "preact";
import { PlangsGraph } from "../schemas/graph";
import { OptionsFacet } from "./components/facets/options";

import "./browse.css";

// biome-ignore lint/suspicious/noExplicitAny: let me be.
type _Any = any;

function Browse({ pg }: { pg: PlangsGraph }) {
  const rows: h.JSX.Element[] = [];

  for (const [vid, pl] of pg.v_plang) {
    const logo = pg.plangLogo(vid);
    rows.push(
      <tr>
        <td>{logo ? <img src={logo.url} alt={pl.name} class="lang-logo" /> : null}</td>
        <td>{pl.name}</td>
        <td>
          {pl.extensions?.map((x) => (
            <span key={x} class="lang-ext">
              {x}
            </span>
          ))}
        </td>
      </tr>,
    );
  }

  return (
    <>
      <nav class="browseNav">
        <OptionsFacet title="Type Systems" options={[]} />
      </nav>

      <article class="browseContent">
        <table class="browseTable">
          <thead>
            <tr>
              <th>Logo</th>
              <th>Lang</th>
              <th>Extensions</th>
            </tr>
          </thead>
          <tbody>{rows}</tbody>
        </table>
      </article>
    </>
  );
}

class Plangs {
  constructor(readonly pg: PlangsGraph) {}
}

async function browse() {
  const elem = document.getElementById("browse");
  if (!elem) throw new Error("Element not found: browse-app");

  try {
    const req = await fetch("/plangs.json");
    const plangData = await req.json();

    const pg = new PlangsGraph();
    pg.loadJSON(plangData);
    console.log("PlangsGraph:", pg.numVertices, "vertices", pg.numEdges, "edges");

    render(<Browse pg={pg} />, elem);
  } catch (e) {
    console.error(e);
  }
}

browse();
