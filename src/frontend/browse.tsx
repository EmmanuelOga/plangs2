// biome-ignore lint/style/useImportType: h is needed for tsx support.
import { Fragment, render, h } from "preact";
import { useMemo, useState } from "preact/hooks";
import type { Link, VID_Plang, VID_TypeSystem } from "src/schemas/entities";
import { PlangsGraph } from "../schemas/plangs_graph";
import { setToggle, useSet } from "./useSet";
import "./browse.css";

// biome-ignore lint/suspicious/noExplicitAny: let me be.
type _Any = any;

function Browse({ pg }: { pg: PlangsGraph }) {
  const [sectionsVer, sections] = useSet<string>([]);
  const [filtersVer, filters] = useSet<VID_TypeSystem>([]);
  const [allOrAny, setAllOrAny] = useState<"all" | "any">("any");

  function tsysFilter([plVid]: [VID_Plang, _Any]) {
    if (filters.size === 0) return true;

    if (allOrAny === "all") {
      for (const tsVid of filters) {
        if (!pg.e_plang_tsys.has(plVid, tsVid)) return false;
      }
      return true;
    }

    // allOrAny === "any"
    for (const tsVid of filters) {
      if (pg.e_plang_tsys.has(plVid, tsVid)) return true;
    }
    return false;
  }

  // biome-ignore lint/correctness/useExhaustiveDependencies: dependencies are correct.
  const plangs = useMemo(() => {
    return [...pg.v_plang].sort().filter(tsysFilter);
  }, [filtersVer, allOrAny]);

  function sectionClass(section: string): string {
    if (section === "tsys" && filters.size > 0) {
      return "active";
    }
    return "";
  }

  function linkToA({ href, title }: Link): h.JSX.Element {
    return (
      <a href={href} target="_blank" rel="noreferrer">
        {title}
      </a>
    );
  }

  function findLink(links: Link[], lkind: Link["kind"], title?: string): h.JSX.Element {
    const link = links.find(({ kind }) => kind === lkind);
    if (link) return linkToA({ href: link.href, title: title ?? link.title });
    return <></>;
  }

  return (
    <>
      <nav>
        {/* biome-ignore lint/a11y/useKeyWithClickEvents: Ok for now. */}
        <div onClick={() => setToggle(sections, "tsys")} class={sectionClass("tsys")}>
          <span>{sections.has("tsys") ? " -" : " +"}</span>
          Type System
        </div>

        <div id="tsys-filters" hidden={!sections.has("tsys")}>
          <label>
            <input
              type="radio"
              name="filterTsysAllOrAny"
              value="all"
              checked={allOrAny === "all"}
              onClick={() => setAllOrAny("all")}
            />
            All Of
          </label>
          <label>
            <input
              type="radio"
              name="filterTsysAllOrAny"
              value="any"
              checked={allOrAny === "any"}
              onClick={() => setAllOrAny("any")}
            />
            Any Of
          </label>
          <br />
          {[...pg.v_tsystem].sort().map(([tsVid, ts]) => (
            <Fragment key={tsVid}>
              <label>
                <input
                  name="filterTsys"
                  type="checkbox"
                  checked={filters.has(tsVid)}
                  onClick={() => setToggle(filters, tsVid)}
                />
                {ts.name}
              </label>
              <br />
            </Fragment>
          ))}
        </div>
      </nav>
      <article>
        <table>
          {plangs.map(([vid, pl]) => (
            <tr key={vid}>
              <td>{pl.name}</td>
              <td>{findLink(pl.websites ?? [], "homepage", "Homepage")}</td>
              <td>{findLink(pl.websites ?? [], "wikipedia", "Wikipedia")}</td>
            </tr>
          ))}
        </table>
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
