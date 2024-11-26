import { PROSE, tw } from "@plangs/frontend/auxiliar/styles";
import type { PlangsGraph } from "@plangs/plangs/graph";
import { Layout } from "@plangs/server/components/layout";
import { NodeDesc } from "@plangs/server/components/node-desc";

export function Licenses({ pg }: { pg: PlangsGraph }) {
  const entries = pg.nodes.license.values.map(node => <NodeDesc key={node.key} node={node} path="/licenses" />);
  return (
    <Layout pg={pg} tab="licenses" title="Licenses commonly used by open source projects." mainClasses="overflow-y-auto">
      <article class={tw(PROSE, "p-4")}>
        <h1>Licenses</h1>
        {entries.isEmpty ? <p>No licenses just yet!</p> : entries.existing}
      </article>
    </Layout>
  );
}
