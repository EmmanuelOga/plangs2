import { PROSE, tw } from "@plangs/frontend/auxiliar/styles";
import type { PlangsGraph } from "@plangs/plangs/graph";
import type { TPlangsVertexName } from "@plangs/plangs/graph/generated";
import { Layout, type PlangsPage } from "@plangs/server/components/layout";
import { VertexHeader } from "@plangs/server/components/vertex-header";

export function VertexReference({
  pg,
  page,
  heading,
  vertexName,
}: { pg: PlangsGraph; heading: string; vertexName: TPlangsVertexName; page: PlangsPage }) {
  const entries = [...pg.vertices[vertexName].values].map(vertex => <VertexHeader key={vertex.key} vertex={vertex} />);
  return (
    <Layout page={page} title={META[page]?.title} desc={META[page]?.desc} mainClasses="overflow-y-auto">
      <article class={tw(PROSE, "p-4")}>
        <h1>{heading}</h1>
        {entries.length === 0 ? <p>No resources just yet!</p> : entries}
      </article>
    </Layout>
  );
}

const META: Partial<Record<PlangsPage, { title: string; desc: string }>> = {
  licenses: {
    title: "Licenses commonly used by Software resources.",
    desc: "Licenses used by Software covered on Plangs!",
  },
  paradigms: { title: "Paradigms used by your favorite Programming Languages!", desc: "" },
  platforms: {
    title: "Platforms your favorite Programming Languages support!",
    desc: "Platforms supported by Software covered on Plangs!",
  },
  tags: {
    title: "Tags used across Plangs! for categorization.",
    desc: "Tags used to categorize resource on Plangs!",
  },
  tsys: {
    title: "Type Systems implemented by your favorite Programming Languages!",
    desc: "Type Systems implemented by Programming Languages covered on Plangs!",
  },
};