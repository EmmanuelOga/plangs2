import { PlThumb } from "@plangs/frontend/components/misc/pl-thumb";
import { script, tw } from "@plangs/frontend/utils";
import type { PlangsGraph } from "@plangs/plangs";

import { h } from "preact";
import { id } from "../elements";
import { PlFilters } from "./filters";
import { Layout } from "./layout";

export const SCROLL = tw("overflow-y-auto overflow-x-hidden");

export function Plangs({ pg }: { pg: PlangsGraph }) {
  return (
    <Layout
      tab="plangs"
      title="Find your next favorite programming language!"
      description="Discover https://plangs.page faceted search engine to find your next favorite programming language."
      overflow="overflow-auto">
      <div class={tw("h-full w-full flex-1", "flex flex-col lg:flex-row", "gap-4", "overflow-auto")}>
        <div class={tw("flex-1", "flex flex-col", "gap-2", "overflow-auto", "pl-bg-g")}>
          <PlFilters class={tw(SCROLL, "z-10", "px-2 pt-4 pb-0", "max-h-[40%]", "bg-linear-to-b from-black to-transparent")} />
          <PlGrid pg={pg} class={tw(SCROLL, "p-4", "flex-1")} />
        </div>

        <div class={tw(SCROLL, "lg:w-[33dvw] lg:max-w-[40rem]", "max-h-[20dvh] sm:max-h-[35dvh] lg:max-h-[unset]")}>
          {/* @ts-ignore TODO: declare pl-info type. */}
          {h("pl-info", { id: id("plInfo"), tab: "plangs", open: true })}
        </div>
      </div>
      {script("window.restorePlInfo()")}
    </Layout>
  );
}

function PlGrid({ pg, class: cssClass }: { pg: PlangsGraph; class: string }) {
  return (
    <div class={tw(cssClass)}>
      <div
        id={id("plGrid")}
        class={tw(
          "grid gap-3 sm:gap-5 ",

          "grid-cols-[repeat(auto-fit,minmax(5rem,1fr))]",
          "sm:grid-cols-[repeat(auto-fit,minmax(8rem,1fr))]",
        )}>
        {pg.nodes.pl.batch().map(([key, pl]) => (
          <PlThumb key={key} pl={pl} class="max-h-[15rem]" />
        ))}
      </div>
    </div>
  );
}
