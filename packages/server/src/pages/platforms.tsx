import { BORDER, PROSE, tw } from "@plangs/frontend/auxiliar/styles";
import { Anchor } from "@plangs/frontend/components/misc/anchor";
import type { PlangsGraph } from "@plangs/plangs";
import { Layout } from "@plangs/server/components/layout";

export function Platforms({ pg }: { pg: PlangsGraph }) {
  const entries = pg.nodes.plat.values.map(node => (
    <div key={node.key} class={tw("mb-8", tw(BORDER, "border-b-1"))}>
      <div class="float-right">{node.websites.map(link => <Anchor key={link.href} link={link} />).existing}</div>
      <header class="font-extrabold text-3xl">{node.name}</header>
      <p>{node.description}</p>
    </div>
  ));
  return (
    <Layout pg={pg} tab="platforms" title="Platforms your favorite programming languages support!" mainClasses="overflow-y-auto">
      <article class={tw(PROSE, "p-4")}>
        <h1>Platforms</h1>
        {entries.isEmpty ? <p>No platforms just yet!</p> : entries.existing}
      </article>
    </Layout>
  );
}
