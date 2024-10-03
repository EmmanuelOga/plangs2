import { Dispatchable, useDispatchable } from "@plangs/frontend/dispatchable";
import type { E, PlangsGraph } from "@plangs/plangs/index";

export const TAG_NAME = "input-facet";

export type InputFacetProps = {
  pg?: PlangsGraph;
  edge?: E;
  dir?: "direct" | "inverse";
};

class FacetState extends Dispatchable<{ count: number }> {
  increment() {
    this.data.count++;
    this.update();
  }

  decrement() {
    this.data.count--;
  }
}

export function InputFacet({ pg, edge, dir }: InputFacetProps) {
  if (!pg || !edge || !dir) return <div>...</div>;

  const state = useDispatchable(new FacetState({ count: 0 }));

  const emap = dir === "direct" ? pg.edges[edge].adjTo : pg.edges[edge].adjFrom;

  if (!emap) return <div>...</div>;

  const tmp: [string, number][] = [...emap.entries2()].map(([_, anyEdge, edges]) => {
    const name = (dir === "direct" ? anyEdge.nodeTo : anyEdge.nodeFrom)?.name ?? "";
    return [name, edges.size];
  });

  // tmp.sort((a, b) => a[0].localeCompare(b[0]));
  tmp.sort((a, b) => b[1] - a[1]);

  return (
    <div class="readable max-h-[20rem] overflow-x-hidden overflow-y-scroll">
      <button type="button" onClick={() => state.increment()}>
        Increment
      </button>

      <button type="button" onClick={() => state.decrement()}>
        Decrement
      </button>

      <div>{state.data.count}</div>

      <input type="text" placeholder="Facet" />
      <table>
        <thead>
          <tr>
            <th>Facet</th>
            <th>Count</th>
          </tr>
        </thead>
        <tbody>
          {tmp.map(([key, count]) => (
            <tr key={`${edge}-${dir}-${key}`}>
              <td>{key}</td>
              <td class="text-center">{count}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export const EVENTS = {};
