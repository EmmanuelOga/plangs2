import { PlThumb } from "@plangs/frontend/components/misc/pl-thumb";
import { tw } from "@plangs/frontend/utils";
import type { PlangsGraph } from "@plangs/plangs";

import { h } from "preact";
import { READABLE_CLASSES, id } from "../elements";
import { PlFilters } from "./filters";
import { Layout } from "./layout";

const SCROLL = tw("p-3", "overflow-y-scroll overflow-x-hidden");

export function Browse({ pg }: { pg: PlangsGraph }) {
  return (
    <Layout title="Find your next favorite programming language!" tab="browse" overflow="overflow-auto">
      <div class={tw("h-full w-full flex-1", "flex flex-col lg:flex-row", "overflow-auto")}>
        <div class={tw("flex-1", "flex flex-col", "gap-2", "overflow-auto")}>
          <PlFilters class={tw(SCROLL, "z-10", "max-h-[35%]", "border-1 border-secondary", "mt-2")} />
          <PlGrid pg={pg} class={tw("border-1 border-primary")} />
        </div>

        {h("pl-info", {
          id: id("plInfo"),
          class: tw(
            SCROLL,
            "w-full lg:w-[33%]",
            "max-h-[20dvh] sm:max-h-[35dvh] lg:max-h-[unset]",
            "h-fit w-full",

            "[&>h1]:text-lg sm:[&>h1]:text-4xl",
            "[&>h1]:inline sm:[&>h1]:block",
            "[&>.dash]:inline sm:[&>.dash]:hidden",
            "[&>p]:inline sm:[&>p]:block",
            "[&>details]:hidden sm:[&>details]:block",
          ),
        })}
      </div>
    </Layout>
  );
}

function PlGrid({ pg, class: cssClass }: { pg: PlangsGraph; class: string }) {
  return (
    <div
      id={id("plGrid")}
      class={tw(
        "flex-1",
        SCROLL,
        "pl-bg-g",
        cssClass,

        "grid gap-3 sm:gap-5 ",
        "grid-cols-[repeat(auto-fit,minmax(5rem,1fr))]",
        "sm:grid-cols-[repeat(auto-fit,minmax(8rem,1fr))]",
      )}>
      {pg.nodes.pl.batch().map(([key, pl]) => (
        <PlThumb key={key} pl={pl} class="max-h-[15rem]" />
      ))}
    </div>
  );
}
