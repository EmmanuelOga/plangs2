import { Fragment, h, render } from "preact";
import { useMemo } from "preact/hooks";
import type { VID_Plang, VID_TypeSystem, V_Plang } from "src/entities/schemas";
import { PlangsGraph } from "../entities/plangs_graph";
import { useSet } from "./useSet";

// biome-ignore lint/suspicious/noExplicitAny: let me be.
type _Any = any;

function Browse({ pg }: { pg: PlangsGraph }) {
  const [filtersVer, filters] = useSet<VID_TypeSystem>([]);

  function tsysFilter([plVid]: [VID_Plang, _Any]) {
    if (filters.size === 0) return true;
    for (const tsVid of filters) {
      if (pg.e_plang_tsys.has(plVid, tsVid)) return true;
    }
    return false;
  }

  const plangs = useMemo(() => {
    return [...pg.v_plang].sort().filter(tsysFilter);
  }, [filtersVer]);

  function toggleTsys(tsVid: VID_TypeSystem) {
    if (filters.has(tsVid)) {
      filters.delete(tsVid);
    } else {
      filters.add(tsVid);
    }
  }

  return (
    <>
      <nav>
        <h1>Type System</h1>

        <label>
          <input type="radio" value="all" />
          All Of
        </label>

        <label>
          <input type="radio" value="any" />
          Any Of
        </label>

        <br />

        {[...pg.v_tsystem].sort().map(([tsVid, ts]) => (
          <Fragment key={tsVid}>
            <label>
              <input type="checkbox" checked={filters.has(tsVid)} onClick={() => toggleTsys(tsVid)} />
              {ts.name}
            </label>
            <br />
          </Fragment>
        ))}
      </nav>
      <article>
        <h1>Results</h1>
        {plangs.map(([vid, pl]) => (
          <div key={vid}>{pl.name}</div>
        ))}
      </article>
    </>
  );
}

async function browse() {
  const elem = document.getElementById("browse-app");
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
