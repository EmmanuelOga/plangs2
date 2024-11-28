import { tw } from "@plangs/frontend/auxiliar/styles";
import type { PlangsGraph } from "@plangs/plangs/graph";
import type { PlangsVertexName } from "@plangs/plangs/graph/generated";
import { cssID } from "@plangs/server/elements";
import { NodeThumbn } from "./node-thumbn";

export function NodeGrid({ pg, vertex, class: cssClass }: { pg: PlangsGraph; vertex: PlangsVertexName; class?: string }) {
  return (
    <div class={tw(cssClass)}>
      <div
        id={cssID("nodeGrid")}
        class={tw("grid gap-4 2xl:mx-4", "grid-cols-[repeat(auto-fit,minmax(5rem,1fr))]", "2xl:grid-cols-[repeat(auto-fit,minmax(8rem,1fr))]")}>
        {[...pg.vertices[vertex].values].map(node => (
          <NodeThumbn key={node.key} node={node} />
        ))}
      </div>
    </div>
  );
}
