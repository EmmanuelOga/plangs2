import { tw } from "@plangs/frontend/auxiliar/styles";
import { script } from "@plangs/frontend/auxiliar/utils";
import { facetsMain } from "@plangs/frontend/components/facets/main";
import { plInfo } from "@plangs/frontend/components/pl-info";
import type { PlangsGraph } from "@plangs/plangs";
import { Layout } from "@plangs/server/components/layout";
import { NodeGrid } from "../components/node-grid";

export function Learning({ pg }: { pg: PlangsGraph }) {
  return (
    <Layout
      pg={pg}
      tab="learning"
      title="Browse learning resources to become the best software developer!"
      description="Discover https://plangs.page faceted search engine to find your next programming language learning resources."
      mainClasses={tw("overflow-hidden", "flex flex-col 2xl:flex-row", "gap-2")}>
      {/* fmt. */}

      {facetsMain({ tab: "communities", class: tw("max-h-[45dvh] 2xl:max-h-[unset]", "max-w-full 2xl:w-[35rem]", "overflow-hidden") })}
      {script("window.restoreFilters()")}

      <NodeGrid pg={pg} node={"learning"} class={tw("flex-1", "overflow-y-scroll", "m-1")} />

      <div class={tw("overflow-hidden overflow-y-scroll", "max-h-[15dvh] 2xl:max-h-[unset] 2xl:w-[25rem]")}>
        {plInfo({ tab: "plangs", open: true })}
        {script("window.restorePlInfo()")}
      </div>
    </Layout>
  );
}
