import { PROSE, tw } from "@plangs/frontend/auxiliar/styles";
import type { PlangsGraph } from "@plangs/plangs/graph";
import { Layout } from "@plangs/server/components/layout";
import { VertexHeader } from "@plangs/server/components/vertex-header";

export function Paradigms({ pg }: { pg: PlangsGraph }) {
  const entries = [...pg.paradigm.values].map(vertex => <VertexHeader key={vertex.key} vertex={vertex} path="/paradigms" />);
  return (
    <Layout tab="paradigms" title="Paradigms used by your favorite programming languages!" mainClasses="overflow-y-auto">
      <article class={tw(PROSE, "p-4")}>
        <h1>Paradigms</h1>
        {entries.length === 0 ? <p>No paradigms just yet!</p> : entries}
      </article>
    </Layout>
  );
}
