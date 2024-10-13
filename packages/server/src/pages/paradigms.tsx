import { PROSE } from "@plangs/frontend/styles";
import { tw } from "@plangs/frontend/utils";
import type { PlangsGraph } from "@plangs/plangs";

import { Anchor } from "@plangs/frontend/components/misc/anchor";
import { Layout } from "../components/layout";

export function Paradigms({ pg }: { pg: PlangsGraph }) {
  const entries = pg.nodes.paradigm.values.map(node => (
    <div key={node.key} class={tw("mb-8", "border-primary/50 border-b-1 border-dotted")}>
      <div class="float-right">{node.websites.map(link => <Anchor key={link.href} link={link} />).existing}</div>
      <header class="font-extrabold text-3xl">{node.name}</header>
      <p>{node.description}</p>
    </div>
  ));
  return (
    <Layout tab="paradigms" title="Paradigms used by your favorite programming languages!" mainClasses="overflow-y-auto">
      <article class={tw(PROSE, "p-4")}>
        <h1>Paradigms</h1>
        {entries.isEmpty ? <p>No paradigms just yet!</p> : entries.existing}
      </article>
    </Layout>
  );
}
