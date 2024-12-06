import { PROSE, tw } from "@plangs/frontend/auxiliar/styles";
import type { PlangsGraph } from "@plangs/plangs/graph";
import { Layout } from "@plangs/server/components/layout";
import { VertexHeader } from "@plangs/server/components/vertex-header";

export function Licenses({ pg }: { pg: PlangsGraph }) {
  const entries = [...pg.license.values].map(vertex => <VertexHeader key={vertex.key} vertex={vertex} />);
  return (
    <Layout page="licenses" title="Licenses commonly used by Software resources." mainClasses="overflow-y-auto">
      <article class={tw(PROSE, "p-4")}>
        <h1>Licenses</h1>
        {entries.length === 0 ? <p>No licenses just yet!</p> : entries}
      </article>
    </Layout>
  );
}
