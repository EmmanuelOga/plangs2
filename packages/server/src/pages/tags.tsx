import { PROSE, tw } from "@plangs/frontend/auxiliar/styles";
import type { PlangsGraph } from "@plangs/plangs/graph";
import { Layout } from "@plangs/server/components/layout";
import { VertexHeader } from "@plangs/server/components/vertex-header";

export function Tags({ pg }: { pg: PlangsGraph }) {
  const entries = [...pg.tag.values].map(vertex => <VertexHeader key={vertex.key} vertex={vertex} />);
  return (
    <Layout tab="tags" title="Tags used across Plangs! for categorization." mainClasses="overflow-y-auto">
      <article class={tw(PROSE, "p-4")}>
        <h1>Tags</h1>
        {entries.length === 0 ? <p>No tags just yet!</p> : entries}
      </article>
    </Layout>
  );
}
