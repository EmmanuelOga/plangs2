import { VSCROLL, tw } from "@plangs/frontend/auxiliar/styles";
import { VertexInfo } from "@plangs/frontend/components/vertex-info/vertex-info";
import type { PlangsGraph } from "@plangs/plangs/graph";
import type { TPlangsVertexName } from "@plangs/plangs/graph/generated";
import { Layout, type PlangsPage } from "@plangs/server/components/layout";
import { VertexThumbn } from "@plangs/server/components/vertex-thumbn";
import { cssClass, cssID } from "@plangs/server/elements";
import { script } from "@plangs/server/utils/html";

export function VertexGrid({ pg, page, vertexName }: { pg: PlangsGraph; page: PlangsPage; vertexName: TPlangsVertexName }) {
  const facets = (
    <>
      <div class={tw("grid-facets", cssClass("facetsMain"))} data-page={page} />
      {script("window.restoreFilters()")}
    </>
  );

  const grid = (
    <div class={tw("grid-main", "grid gap-4 p-4", "auto-rows-max", "grid-cols-[repeat(auto-fit,minmax(7rem,1fr))]")} id={cssID("vertexGrid")}>
      {[...pg.vertices[vertexName].values].map(vertex => (
        <VertexThumbn key={vertex.key} vertex={vertex} />
      ))}
    </div>
  );

  const info = (
    <div class={tw("grid-info", VSCROLL, cssClass("vertexInfo"), "bg-linear-to-b to-secondary/50")} data-page={page} data-open={false}>
      <VertexInfo page={page} open={false} />
    </div>
  );

  return (
    <Layout page={page} pageType="grid" title={META[vertexName]?.title} desc={META[vertexName]?.desc} mainClasses={tw("grid-wrapper")}>
      {facets}
      {grid}
      {info}
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
