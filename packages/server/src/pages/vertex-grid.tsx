import { tw } from "@plangs/frontend/auxiliar/styles";
import { vertexInfo } from "@plangs/frontend/components/vertex-info";
import { facetsMain } from "@plangs/frontend/facets/main";
import type { PlangsGraph } from "@plangs/plangs/graph";
import type { TPlangsVertexName } from "@plangs/plangs/graph/generated";
import { Layout, type PlangsPage } from "@plangs/server/components/layout";
import { VertexThumbn } from "@plangs/server/components/vertex-thumbn";
import { cssID } from "@plangs/server/elements";
import { script } from "@plangs/server/utils/html";

export function VertexGrid({ pg, page, vertexName }: { pg: PlangsGraph; page: PlangsPage; vertexName: TPlangsVertexName }) {
  return (
    <Layout
      page={page}
      pageType="grid"
      title={META[vertexName]?.title}
      desc={META[vertexName]?.desc}
      mainClasses={tw("overflow-hidden", "flex flex-col 2xl:flex-row", "gap-2")}>
      {/* fmt. */}

      {facetsMain({ page, class: tw("max-h-[45dvh] 2xl:max-h-[unset]", "max-w-full 2xl:w-[35rem]", "overflow-hidden") })}
      {script("window.restoreFilters()")}

      <div class={tw("flex-1", "overflow-y-scroll", "m-1")}>
        <div
          id={cssID("vertexGrid")}
          class={tw("grid gap-4 2xl:mx-4", "grid-cols-[repeat(auto-fit,minmax(5rem,1fr))]", "2xl:grid-cols-[repeat(auto-fit,minmax(8rem,1fr))]")}>
          {[...pg.vertices[vertexName].values].map(vertex => (
            <VertexThumbn key={vertex.key} vertex={vertex} />
          ))}
        </div>
      </div>

      <div class={tw("overflow-hidden overflow-y-scroll", "max-h-[15dvh] 2xl:max-h-[unset] 2xl:w-[25rem]")}>{vertexInfo({ page, open: true })}</div>
    </Layout>
  );
}

const META: Partial<Record<TPlangsVertexName, { title: string; desc: string }>> = {
  app: {
    title: "Applications made with your favorite Programming Languages!",
    desc: "Find your next favorite applications, and the programming language used to make them, on Plangs!",
  },
  community: {
    title: "Communities to mingle and get help on programming the next great thing!",
    desc: "Mingle with the people that love your favorite Programming Languages, tools, and more, on Plangs!",
  },
  learning: {
    title: "Learning Resources to become an amazing Developer!",
    desc: "Find the best Learning Resources to become and amazing Developer!",
  },
  library: {
    title: "Libraries made for your favorite Programming Languages!",
    desc: "Find your next favorite Library for your programming languages on Plangs!",
  },
  plang: { title: "Programming Languages!", desc: "Find your next favorite programming language, and the resources to learn it, on Plangs!" },
  tool: {
    title: "Tools that make your favorite Programming Languages even better!",
    desc: "Find your next favorite programming language resources on Plangs!",
  },
};
