import { PlThumb } from "@plangs/frontend/components/misc/pl-thumb";
import { tw } from "@plangs/frontend/utils";
import type { PlangsGraph } from "@plangs/plangs";

import { PlInfo } from "@plangs/frontend/src/components/pl-info/pl-info";

import { id } from "./dom";
import { PlFilters } from "./filters";

export function Browse({ pg }: { pg: PlangsGraph }) {
  return (
    <article
      class={tw(
        "h-full w-full flex-1",

        "flex flex-col sm:flex-row",
        "gap-2",

        "sm:overflow-hidden",
      )}>
      <PlGrid pg={pg} class={tw("flex-1")} />

      <PlInfo
        pg={pg}
        pl={pg.nodes.pl.get("pl+python")}
        class={tw(
          "px-2 sm:px-0 sm:py-2",
          "shrink grow",

          "max-h-[25dvh] sm:max-h-[unset] sm:max-w-[40dvh]",
          "overflow-y-auto",
        )}
      />
    </article>
  );
}

function PlGrid({ pg, class: cssClass }: { pg: PlangsGraph; class: string }) {
  return (
    <div
      class={tw(
        cssClass,
        "flex flex-col",
        "overflow-hidden",

        "bg-linear-to-br from-background to-primary/50",
      )}>
      <PlFilters
        class={tw(
          "grid grid-cols-2",
          "gap-4 p-2",

          "max-h-[25dvh]",

          "overflow-y-auto",
        )}
      />

      <div
        id={id("plGrid")}
        class={tw(
          "flex-1",

          "grid grid-cols-[repeat(auto-fit,minmax(5rem,1fr))]",
          "md:grid-cols-[repeat(auto-fit,minmax(8rem,1fr))]",
          "mt-1 gap-4 p-2",

          "overflow-y-auto",

          "border-background border-t-4",
          "pl-bg-g",
        )}>
        {pg.nodes.pl.batch().map(([key, pl]) => (
          <PlThumb key={key} pl={pl} class="max-h-[15rem]" />
        ))}
      </div>
    </div>
  );
}
