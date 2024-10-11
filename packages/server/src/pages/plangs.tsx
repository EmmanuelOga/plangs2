import { PlThumb } from "@plangs/frontend/components/misc/pl-thumb";
import { script, tw } from "@plangs/frontend/utils";
import type { PlangsGraph } from "@plangs/plangs";

import { h } from "preact";
import { id } from "../elements";
import { PlFilters } from "./filters";
import { Layout } from "./layout";

export function Plangs({ pg }: { pg: PlangsGraph }) {
  return (
    <Layout
      tab="plangs"
      title="Find your next favorite programming language!"
      description="Discover https://plangs.page faceted search engine to find your next favorite programming language."
      mainClasses={tw("overflow-hidden", "flex flex-col sm:flex-row", "gap-2")}>
      {/* --- */}

      <PlFilters class={tw("max-h-[35dvh] sm:max-h-[unset] sm:w-[25rem]")} />
      <PlGrid pg={pg} class={tw("flex-1", "overflow-y-scroll", "m-1")} />

      <div class={tw("overflow-hidden overflow-y-scroll", "max-h-[20dvh] sm:max-h-[unset] sm:w-[25rem]")}>
        {/* @ts-ignore TODO https://preactjs.com/guide/v10/typescript#extending-built-in-jsx-types  */}
        {h("pl-info", { id: id("plInfo"), tab: "plangs", open: true })}
      </div>

      {script("window.restorePlInfo()")}
    </Layout>
  );
}

function PlGrid({ pg, class: cssClass }: { pg: PlangsGraph; class?: string }) {
  return (
    <div class={tw(cssClass)}>
      <div id={id("plGrid")} class="grid grid-cols-4 gap-2 px-2">
        {pg.nodes.pl.batch().map(([key, pl]) => (
          <PlThumb key={key} pl={pl} />
        ))}
      </div>
    </div>
  );
}
