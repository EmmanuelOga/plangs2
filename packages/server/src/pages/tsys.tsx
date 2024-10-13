import { Anchor } from "@plangs/frontend/components/misc/anchor";
import { PROSE } from "@plangs/frontend/styles";
import { tw } from "@plangs/frontend/utils";
import type { PlangsGraph } from "@plangs/plangs";

import { Layout } from "../components/layout";

export function TSys({ pg }: { pg: PlangsGraph }) {
  const entries = pg.nodes.tsys.values.map(tsys => (
    <div key={tsys.key} class={tw("mb-8", "border-primary/50 border-b-1 border-dotted")}>
      <div class="float-right">{tsys.websites.map(link => <Anchor key={link.href} link={link} />).existing}</div>
      <header class="font-extrabold text-3xl">{tsys.name}</header>
      <p>{tsys.description}</p>
    </div>
  ));
  return (
    <Layout tab="tsys" title="Type systems implemented by your favorite programming languages!" mainClasses="overflow-y-auto">
      <article class={tw(PROSE, "p-4")}>
        <h1>Type Systems</h1>
        {entries.isEmpty ? <p>No type systems just yet!</p> : entries.existing}
      </article>
    </Layout>
  );
}
