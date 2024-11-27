import { PROSE, tw } from "@plangs/frontend/auxiliar/styles";
import type { PlangsGraph } from "@plangs/plangs/graph";
import { Layout } from "@plangs/server/components/layout";
import { NodeDesc } from "@plangs/server/components/node-desc";

export function TSys({ pg }: { pg: PlangsGraph }) {
  const entries = [...pg.typeSystem.values].map(node => <NodeDesc key={node.key} node={node} path="/tsys" />);
  return (
    <Layout pg={pg} tab="tsys" title="Type systems implemented by your favorite programming languages!" mainClasses="overflow-y-auto">
      <article class={tw(PROSE, "p-4")}>
        <h1>Type Systems</h1>
        {entries.length === 0 ? <p>No type systems just yet!</p> : entries}
      </article>
    </Layout>
  );
}
