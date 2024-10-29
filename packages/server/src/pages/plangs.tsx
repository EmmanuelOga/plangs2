import { h } from "preact";

import { script, tw } from "@plangs/frontend/auxiliar/utils";
import { facetsMain } from "@plangs/frontend/components/facets/main";
import { PlThumb } from "@plangs/frontend/components/misc/pl-thumb";
import { plInfo } from "@plangs/frontend/components/pl-info";
import type { PlangsGraph } from "@plangs/plangs";
import { Layout } from "@plangs/server/components/layout";
import { id } from "@plangs/server/elements";

export function Plangs({ pg }: { pg: PlangsGraph }) {
  return (
    <Layout
      tab="plangs"
      title="Find your next favorite programming language!"
      description="Discover https://plangs.page faceted search engine to find your next favorite programming language."
      mainClasses={tw("overflow-hidden", "flex flex-col 2xl:flex-row", "gap-2")}>
      {/* fmt. */}

      {facetsMain({ tab: "plangs", class: tw("max-h-[45dvh] 2xl:max-h-[unset]", "max-w-full 2xl:w-[35rem]", "overflow-hidden") })}
      {script("window.restoreFilters()")}

      <PlGrid pg={pg} class={tw("flex-1", "overflow-y-scroll", "m-1")} />

      <div class={tw("overflow-hidden overflow-y-scroll", "max-h-[15dvh] 2xl:max-h-[unset] 2xl:w-[25rem]")}>
        {plInfo({ tab: "plangs", open: true })}
        {script("window.restorePlInfo()")}
      </div>
    </Layout>
  );
}

function PlGrid({ pg, class: cssClass }: { pg: PlangsGraph; class?: string }) {
  return (
    <div class={tw(cssClass)}>
      <div
        id={id("plGrid")}
        class={tw("grid gap-4 2xl:mx-4", "grid-cols-[repeat(auto-fit,minmax(5rem,1fr))]", "2xl:grid-cols-[repeat(auto-fit,minmax(8rem,1fr))]")}>
        {pg.nodes.pl.batch().map(([key, pl]) => (
          <PlThumb key={key} pl={pl} />
        ))}
      </div>
    </div>
  );
}
