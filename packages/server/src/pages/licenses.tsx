import { BORDER, PROSE, tw } from "@plangs/frontend/auxiliar/styles";
import { Anchor } from "@plangs/frontend/components/misc/anchor";
import type { PlangsGraph } from "@plangs/plangs";
import { Layout } from "@plangs/server/components/layout";

export function Licenses({ pg }: { pg: PlangsGraph }) {
  const entries = pg.nodes.license.values.map(node => (
    <div key={node.key} class={tw("mb-8", tw(BORDER, "border-b-1"))}>
      <div class="float-right">{node.websites.map(link => <Anchor key={link.href} link={link} />).existing}</div>
      <header class="font-extrabold text-3xl">{node.name}</header>
      <p>{node.description}</p>
    </div>
  ));
  return (
    <Layout tab="licenses" title="Licenses commonly used by open source projects." mainClasses="overflow-y-auto">
      <article class={tw(PROSE, "p-4")}>
        <h1>Licenses</h1>
        {entries.isEmpty ? <p>No licenses just yet!</p> : entries.existing}
      </article>
    </Layout>
  );
}
