import { h } from "preact";

import { script, tw } from "@plangs/frontend/auxiliar/utils";
import { PlThumb } from "@plangs/frontend/components/misc/pl-thumb";
import type { PlangsGraph } from "@plangs/plangs";
import { Layout } from "@plangs/server/components/layout";
import { id } from "@plangs/server/elements";

export function Plangs({ pg }: { pg: PlangsGraph }) {
  return (
    <Layout
      tab="plangs"
      title="Find your next favorite programming language!"
      description="Discover https://plangs.page faceted search engine to find your next favorite programming language."
      mainClasses={tw("overflow-hidden", "flex flex-col sm:flex-row", "gap-2")}>
      {/* fmt. */}

      {/* @ts-ignore TODO fix global declaration of components.  */}
      {h("facets-main", { tab: "plangs", class: tw("max-h-[45dvh] sm:max-h-[unset]", "max-w-full sm:w-[35rem]") })}

      <PlGrid pg={pg} class={tw("flex-1", "overflow-y-scroll", "m-1")} />

      <div class={tw("overflow-hidden overflow-y-scroll", "max-h-[15dvh] sm:max-h-[unset] sm:w-[25rem]")}>
        {/* @ts-ignore TODO https://preactjs.com/guide/v10/typescript#extending-built-in-jsx-types  */}
        {h("pl-info", { id: id("plInfo"), tab: "plangs", open: true })}
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
        class={tw("grid gap-4 sm:mx-4", "grid-cols-[repeat(auto-fit,minmax(5rem,1fr))]", "sm:grid-cols-[repeat(auto-fit,minmax(8rem,1fr))]")}>
        {pg.nodes.pl.batch().map(([key, pl]) => (
          <PlThumb key={key} pl={pl} />
        ))}
      </div>
    </div>
  );
}
