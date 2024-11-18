import { tw } from "@plangs/frontend/auxiliar/styles";
import { PlThumb } from "@plangs/frontend/components/misc/pl-thumb";
import type { PlangsGraph } from "@plangs/plangs";
import { cssID } from "@plangs/server/elements";

export function NodeGrid({ pg, class: cssClass }: { pg: PlangsGraph; class?: string }) {
  return (
    <div class={tw(cssClass)}>
      <div
        id={cssID("nodeGrid")}
        class={tw("grid gap-4 2xl:mx-4", "grid-cols-[repeat(auto-fit,minmax(5rem,1fr))]", "2xl:grid-cols-[repeat(auto-fit,minmax(8rem,1fr))]")}>
        {pg.nodes.pl.batch().map(([key, pl]) => (
          <PlThumb key={key} pl={pl} />
        ))}
      </div>
    </div>
  );
}
