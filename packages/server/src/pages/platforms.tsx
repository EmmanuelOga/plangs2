import { PROSE, tw } from "@plangs/frontend/auxiliar/styles";
import type { PlangsGraph } from "@plangs/plangs/graph";
import { Layout } from "@plangs/server/components/layout";
import { NodeDesc } from "@plangs/server/components/node-desc";

export function Platforms({ pg }: { pg: PlangsGraph }) {
  const entries = [...pg.platform.values].map(node => <NodeDesc key={node.key} node={node} path="/platforms" />);
  return (
    <Layout pg={pg} tab="platforms" title="Platforms your favorite programming languages support!" mainClasses="overflow-y-auto">
      <article class={tw(PROSE, "p-4")}>
        <h1>Platforms</h1>
        {entries.length === 0 ? <p>No platforms just yet!</p> : entries}
      </article>
    </Layout>
  );
}
