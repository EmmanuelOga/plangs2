import { tw } from "@plangs/frontend/auxiliar/styles";
import { script } from "@plangs/frontend/auxiliar/utils";
import { facetsMain } from "@plangs/frontend/components/facets/main";
import { nodeInfo } from "@plangs/frontend/components/node-info";
import type { PlangsGraph } from "@plangs/plangs/graph";
import { Layout } from "@plangs/server/components/layout";
import { NodeGrid } from "../components/node-grid";

export function Tools({ pg }: { pg: PlangsGraph }) {
  return (
    <Layout
      pg={pg}
      tab="tools"
      title="Browse tools that make your favorite programming languages even better!"
      description="Discover https://plangs.page faceted search engine to find your next favorite programming language resources."
      mainClasses={tw("overflow-hidden", "flex flex-col 2xl:flex-row", "gap-2")}>
      {/* fmt. */}

      {facetsMain({ tab: "tools", class: tw("max-h-[45dvh] 2xl:max-h-[unset]", "max-w-full 2xl:w-[35rem]", "overflow-hidden") })}
      {script("window.restoreFilters()")}

      <NodeGrid pg={pg} node={"tool"} class={tw("flex-1", "overflow-y-scroll", "m-1")} />

      <div class={tw("overflow-hidden overflow-y-scroll", "max-h-[15dvh] 2xl:max-h-[unset] 2xl:w-[25rem]")}>
        {nodeInfo({ tab: "plangs", open: true })}
        {script("window.restoreNodeInfo()")}
      </div>
    </Layout>
  );
}
