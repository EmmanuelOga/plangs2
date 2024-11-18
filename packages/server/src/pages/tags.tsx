import { PROSE, tw } from "@plangs/frontend/auxiliar/styles";
import type { PlangsGraph } from "@plangs/plangs";
import { Layout } from "@plangs/server/components/layout";
import { NodeDesc } from "../components/node-desc";

export function Tags({ pg }: { pg: PlangsGraph }) {
  const entries = pg.nodes.tag.values.map(node => <NodeDesc key={node.key} node={node} path="/tags" />);
  return (
    <Layout pg={pg} tab="tags" title="Tags used across Plangs! for categorization." mainClasses="overflow-y-auto">
      <article class={tw(PROSE, "p-4")}>
        <h1>Tags</h1>
        {entries.isEmpty ? <p>No tags just yet!</p> : entries.existing}
      </article>
    </Layout>
  );
}
