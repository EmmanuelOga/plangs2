import { tw } from "@plangs/frontend/auxiliar/styles";
import { script } from "@plangs/frontend/auxiliar/utils";
import { facetsMain } from "@plangs/frontend/components/facets/main";
import { nodeInfo } from "@plangs/frontend/components/node-info";
import type { PlangsGraph } from "@plangs/plangs/graph";
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

      <NodeGrid pg={pg} vertex={"learning"} class={tw("flex-1", "overflow-y-scroll", "m-1")} />

      <div class={tw("overflow-hidden overflow-y-scroll", "max-h-[15dvh] 2xl:max-h-[unset] 2xl:w-[25rem]")}>
        {nodeInfo({ tab: "plangs", open: true })}
        {script("window.restoreNodeInfo()")}
      </div>
    </Layout>
  );
}
