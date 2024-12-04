import { tw } from "@plangs/frontend/auxiliar/styles";
import { vertexInfo } from "@plangs/frontend/components/vertex-info";
import { facetsMain } from "@plangs/frontend/facets/main";
import type { PlangsGraph } from "@plangs/plangs/graph";
import { Layout, type TAB } from "@plangs/server/components/layout";
import { VertexGrid } from "@plangs/server/components/vertex-grid";
import { script } from "@plangs/server/utils/html";

export function Learning({ pg }: { pg: PlangsGraph }) {
  const tab: TAB = "learning";
  return (
    <Layout
      pg={pg}
      tab={tab}
      title="Browse learning resources to become the best software developer!"
      description="Discover https://plangs.page faceted search engine to find your next programming language learning resources."
      mainClasses={tw("overflow-hidden", "flex flex-col 2xl:flex-row", "gap-2")}>
      {/* fmt. */}

      {facetsMain({ tab, class: tw("max-h-[45dvh] 2xl:max-h-[unset]", "max-w-full 2xl:w-[35rem]", "overflow-hidden") })}
      {script("window.restoreFilters()")}

      <VertexGrid pg={pg} vertex={"learning"} class={tw("flex-1", "overflow-y-scroll", "m-1")} />

      <div class={tw("overflow-hidden overflow-y-scroll", "max-h-[15dvh] 2xl:max-h-[unset] 2xl:w-[25rem]")}>{vertexInfo({ tab, open: true })}</div>
    </Layout>
  );
}
