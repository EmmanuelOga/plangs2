import { PlThumb } from "@plangs/frontend/components/misc/pl-thumb";
import { tw } from "@plangs/frontend/utils";
import type { PlangsGraph } from "@plangs/plangs";

import { PlInfo } from "@plangs/frontend/src/components/pl-info/pl-info";

import { id } from "./dom";
import { PlFilters } from "./filters";

export function Browse({ pg }: { pg: PlangsGraph }) {
  return (
    <article class={tw("h-full w-full flex-1", "overflow-hidden", "flex flex-col sm:flex-row")}>
      <PlFilters class={tw("overflow-y-auto", "grid grid-cols-2", "gap-4 p-2", "db-b")} />
      <PlGrid pg={pg} class={tw("overflow-y-auto", "shrink grow")} />
      <PlInfo pg={pg} pl={pg.nodes.pl.get("pl+python")} class={tw("max-w-[30rem] p-2", "overflow-y-auto", "db-bg")} />
    </article>
  );
}

function PlGrid({ pg, class: cssClass }: { pg: PlangsGraph; class: string }) {
  return (
    <div class={tw(cssClass)}>
      <div
        id={id("plGrid")}
        class={tw(
          // ---
          "grid grid-cols-[repeat(auto-fit,minmax(5rem,1fr))]",
          "md:grid-cols-[repeat(auto-fit,minmax(8rem,1fr))]",
          "gap-4 p-2",
        )}>
        {pg.nodes.pl.batch().map(([key, pl]) => (
          <PlThumb key={key} pl={pl} />
        ))}
      </div>
      {/* Filler to avoid big gaps between rows. */}
      <div class="grow" />
    </div>
  );
}
