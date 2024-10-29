import { BORDER, PROSE, tw } from "@plangs/frontend/auxiliar/styles";
import { Anchor } from "@plangs/frontend/components/misc/anchor";
import type { PlangsGraph } from "@plangs/plangs";
import { Layout } from "@plangs/server/components/layout";

export function TSys({ pg }: { pg: PlangsGraph }) {
  const entries = pg.nodes.tsys.values.map(tsys => (
    <div key={tsys.key} class={tw("mb-8", tw(BORDER, "border-b-1"))}>
      <div class="float-right">{tsys.websites.map(link => <Anchor key={link.href} link={link} />).existing}</div>
      <header class="font-extrabold text-3xl">{tsys.name}</header>
      <p>{tsys.description}</p>
    </div>
  ));
  return (
    <Layout pg={pg} tab="tsys" title="Type systems implemented by your favorite programming languages!" mainClasses="overflow-y-auto">
      <article class={tw(PROSE, "p-4")}>
        <h1>Type Systems</h1>
        {entries.isEmpty ? <p>No type systems just yet!</p> : entries.existing}
      </article>
    </Layout>
  );
}
