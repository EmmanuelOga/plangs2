import { PlThumb } from "@plangs/frontend/components/misc/pl-thumb";
import { tw } from "@plangs/frontend/utils";
import type { PlangsGraph } from "@plangs/plangs";

import { PlInfo } from "@plangs/frontend/src/components/pl-info/pl-info";

import { id } from "../../elements";
import { PlFilters } from "./filters";
import { Layout } from "./layout";

export function Browse({ pg }: { pg: PlangsGraph }) {
  return (
    <Layout title="Find your next favorite programming language!" tab="browse">
      <article class={tw("h-full w-full flex-1", "flex flex-col sm:flex-row", "gap-2")}>
        <div class={tw("flex-1", "flex flex-col", "overflow-auto")}>
          <PlFilters class={tw("overflow-y-auto overflow-x-hidden")} />
          <PlGrid pg={pg} />
        </div>

        <div class="w-[33%] overflow-auto p-4">
          <PlInfo
            pg={pg}
            pl={pg.nodes.pl.get("pl+python")}
            class={tw(
              "w-full",
              "overflow-y-auto",

              // Apply and remove pl-info styles for mobile.
              "[&>h1]:text-lg sm:[&>h1]:text-4xl",
              "[&>h1]:inline sm:[&>h1]:block",
              "[&>.dash]:inline sm:[&>.dash]:hidden",
              "[&>p]:inline sm:[&>p]:block",
              "[&>details]:hidden sm:[&>details]:block",
            )}
          />
        </div>
      </article>
    </Layout>
  );
}

function PlGrid({ pg }: { pg: PlangsGraph }) {
  return (
    <div
      id={id("plGrid")}
      class={tw(
        "flex-1",

        "mr-1.5 pt-5 pr-3 pl-6",
        "overflow-y-auto overflow-x-hidden",

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
