import { PROSE, tw } from "@plangs/frontend/auxiliar/styles";
import type { PlangsGraph } from "@plangs/plangs/graph";
import { Layout } from "@plangs/server/components/layout";
import { VertexHeader } from "@plangs/server/components/vertex-header";

export function TSys({ pg }: { pg: PlangsGraph }) {
  const entries = [...pg.typeSystem.values].map(vertex => <VertexHeader key={vertex.key} vertex={vertex} path="/tsys" />);
  return (
    <Layout tab="tsys" title="Type systems implemented by your favorite programming languages!" mainClasses="overflow-y-auto">
      <article class={tw(PROSE, "p-4")}>
        <h1>Type Systems</h1>
        {entries.length === 0 ? <p>No type systems just yet!</p> : entries}
      </article>
    </Layout>
  );
}
