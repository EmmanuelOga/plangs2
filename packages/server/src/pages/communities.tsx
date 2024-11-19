import { tw } from "@plangs/frontend/auxiliar/styles";
import { script } from "@plangs/frontend/auxiliar/utils";
import { facetsMain } from "@plangs/frontend/components/facets/main";
import { plInfo } from "@plangs/frontend/components/pl-info";
import type { PlangsGraph } from "@plangs/plangs";
import { Layout } from "@plangs/server/components/layout";
import { NodeGrid } from "../components/node-grid";

export function Communities({ pg }: { pg: PlangsGraph }) {
  return (
    <Layout
      pg={pg}
      tab="communities"
      title="Browse communities to engage in programming conversations!"
      description="Discover https://plangs.page faceted search engine to find your next favorite programming language communities."
      mainClasses={tw("overflow-hidden", "flex flex-col 2xl:flex-row", "gap-2")}>
      {/* fmt. */}

      {facetsMain({ tab: "communities", class: tw("max-h-[45dvh] 2xl:max-h-[unset]", "max-w-full 2xl:w-[35rem]", "overflow-hidden") })}
      {script("window.restoreFilters()")}

      <NodeGrid pg={pg} node={"community"} class={tw("flex-1", "overflow-y-scroll", "m-1")} />

      <div class={tw("overflow-hidden overflow-y-scroll", "max-h-[15dvh] 2xl:max-h-[unset] 2xl:w-[25rem]")}>
        {plInfo({ tab: "plangs", open: true })}
        {script("window.restorePlInfo()")}
      </div>
    </Layout>
  );
}
