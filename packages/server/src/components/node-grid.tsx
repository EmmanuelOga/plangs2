import { tw } from "@plangs/frontend/auxiliar/styles";
import type { N, PlangsGraph } from "@plangs/plangs";
import { cssID } from "@plangs/server/elements";
import { NodeThumbn } from "./node-thumbn";

export function NodeGrid({ pg, node, class: cssClass }: { pg: PlangsGraph; node: N; class?: string }) {
  return (
    <div class={tw(cssClass)}>
      <div
        id={cssID("nodeGrid")}
        class={tw("grid gap-4 2xl:mx-4", "grid-cols-[repeat(auto-fit,minmax(5rem,1fr))]", "2xl:grid-cols-[repeat(auto-fit,minmax(8rem,1fr))]")}>
        {pg.nodes[node].batch().map(([key, pl]) => (
          <NodeThumbn key={key} node={pl} />
        ))}
      </div>
    </div>
  );
}
