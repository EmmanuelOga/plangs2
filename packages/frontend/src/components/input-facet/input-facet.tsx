import type { E, PlangsGraph } from "@plangs/plangs/index";

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

  const tmp: [string, number][] = [...emap.keys()].map(key => [key, emap.getMap(key as any)?.size ?? 0]);

  return (
    <div class="readable">
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
            <td>{count}</td>
          </tr>
        ))}
      </table>
    </div>
  );
}

export const EVENTS = {};
