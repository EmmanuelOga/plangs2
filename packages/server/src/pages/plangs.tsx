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
      overflow="overflow-auto">
      <div>
        <div>
          <PlFilters />
          <PlGrid pg={pg} />
        </div>

        {/* @ts-ignore TODO https://preactjs.com/guide/v10/typescript#extending-built-in-jsx-types */}
        <div>{h("pl-info", { id: id("plInfo"), tab: "plangs", open: true })}</div>
      </div>
      {script("window.restorePlInfo()")}
    </Layout>
  );
}

function PlGrid({ pg, class: cssClass }: { pg: PlangsGraph; class?: string }) {
  return (
    <div class={tw(cssClass)}>
      <div id={id("plGrid")}>
        {pg.nodes.pl.batch().map(([key, pl]) => (
          <PlThumb key={key} pl={pl} class="max-h-[15rem]" />
        ))}
      </div>
    </div>
  );
}
