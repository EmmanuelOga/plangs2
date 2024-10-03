import type { AnyEdge, E, PlangsGraph } from "@plangs/plangs/index";

export const TAG_NAME = "input-facet";

export type InputFacetProps = {
  pg?: PlangsGraph;
  edge?: E;
  dir?: "direct" | "inverse";
};

export function InputFacet({ pg, edge, dir }: InputFacetProps) {
  if (!pg || !edge || !dir) return <div>...</div>;

  const emap = dir === "direct" ? pg.edges[edge].adjTo : pg.edges[edge].adjFrom;

  if (!emap) return <div>...</div>;

  const tmp: [string, number][] = [...emap.entries2()].map(([_, anyEdge, edges]) => {
    const name = (dir === "direct" ? anyEdge.nodeTo : anyEdge.nodeFrom)?.name ?? "";
    return [name, edges.size];
  });

  tmp.sort((a, b) => a[0].localeCompare(b[0]));
  tmp.sort((a, b) => b[1] - a[1]);

  return (
    <div class="readable max-h-[20rem] overflow-x-hidden overflow-y-scroll">
      <input type="text" placeholder="Facet" />
      <table>
        <thead>
          <tr>
            <th>Facet</th>
            <th>Count</th>
          </tr>
        </thead>
        {tmp.map(([key, count]) => (
          <tr key="key">
            <td>{key}</td>
            <td class="text-center">{count}</td>
          </tr>
        ))}
      </table>
    </div>
  );
}

export const EVENTS = {};
