import { PROSE, tw } from "@plangs/frontend/auxiliar/styles";
import type { PlangsGraph } from "@plangs/plangs";
import { Layout } from "@plangs/server/components/layout";
import { NodeDesc } from "@plangs/server/components/node-desc";

export function Paradigms({ pg }: { pg: PlangsGraph }) {
  const entries = pg.nodes.paradigm.values.map(node => <NodeDesc key={node.key} node={node} path="/paradigms" />);
  return (
    <Layout pg={pg} tab="paradigms" title="Paradigms used by your favorite programming languages!" mainClasses="overflow-y-auto">
      <article class={tw(PROSE, "p-4")}>
        <h1>Paradigms</h1>
        {entries.isEmpty ? <p>No paradigms just yet!</p> : entries.existing}
      </article>
    </Layout>
  );
}
