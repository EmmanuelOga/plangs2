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
      <div class={tw("grid-facets hidden", cssClass("facetsMain"))} data-page={page} />
      {script("window.restoreFilters()")}
    </>
  );

  const grid = (
    <div
      class={tw(
        "grid-main",
        "grid gap-4 gap-y-6",
        "auto-rows-max",
        "grid-cols-[repeat(auto-fill,minmax(5rem,1fr))]",
        "sm:grid-cols-[repeat(auto-fill,minmax(7rem,1fr))] sm:p-4",
        "ring-2 ring-primary",
      )}
      id={cssID("vertexGrid")}>
      {[...pg.vertices[vertexName].values].map(vertex => (
        <VertexThumbn key={vertex.key} detail={vertex.detail} />
      ))}
    </div>
  );

  const info = (
    <div class={tw("grid-info", VSCROLL, cssClass("vertexInfo"), "bg-linear-to-b to-secondary/50")} data-open={true}>
      <VertexInfo page={page} open={true} />
      {script("window.restoreVertexInfo()")}
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
  subsystem: {
    title: "Subsystems that provide services to your Programs!",
    desc: "Find your next favorite database, queue, or any other subsystem for your programs, on Plangs!",
  },
};
