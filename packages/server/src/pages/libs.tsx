import { tw } from "@plangs/frontend/auxiliar/styles";
import { vertexInfo } from "@plangs/frontend/components/vertex-info";
import { facetsMain } from "@plangs/frontend/facets/main";
import type { PlangsGraph } from "@plangs/plangs/graph";
import { Layout, type TAB } from "@plangs/server/components/layout";
import { VertexGrid } from "@plangs/server/components/vertex-grid";
import { script } from "@plangs/server/utils/html";

export function Libs({ pg }: { pg: PlangsGraph }) {
  const tab: TAB = "libs";
  return (
    <Layout
      tab={tab}
      title="Browse libraries made with your favorite programming languages!"
      description="Discover https://plangs.page faceted search engine to find your next favorite programming language resources."
      mainClasses={tw("overflow-hidden", "flex flex-col 2xl:flex-row", "gap-2")}>
      {/* fmt. */}

      {facetsMain({ tab, class: tw("max-h-[45dvh] 2xl:max-h-[unset]", "max-w-full 2xl:w-[35rem]", "overflow-hidden") })}
      {script("window.restoreFilters()")}

      <VertexGrid pg={pg} vertex={"library"} class={tw("flex-1", "overflow-y-scroll", "m-1")} />

      <div class={tw("overflow-hidden overflow-y-scroll", "max-h-[15dvh] 2xl:max-h-[unset] 2xl:w-[25rem]")}>{vertexInfo({ tab, open: true })}</div>
    </Layout>
  );
}
