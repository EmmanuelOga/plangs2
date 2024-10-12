import { PROSE } from "@plangs/frontend/styles";
import { tw } from "@plangs/frontend/utils";
import type { PlangsGraph } from "@plangs/plangs";

import { Anchor } from "@plangs/frontend/components/misc/anchor";
import { Layout } from "../components/layout";
import { Table } from "../components/table";

export function TSys({ pg }: { pg: PlangsGraph }) {
  const thead = (
    <tr>
      <th>Name</th>
      <th>Description</th>
      <th>Keywords</th>
      <th>Websites</th>
    </tr>
  );
  const tsys = pg.nodes.tsys.values;
  const tbody = tsys.map(tsys => (
    <tr key={tsys.key}>
      <td>{tsys.name}</td>
      <td>{tsys.description}</td>
      <td>{tsys.keywords.join(", ")}</td>
      <td>{tsys.websites.map(link => <Anchor key={link.href} link={link} />).existing}</td>
    </tr>
  )).existing;
  return (
    <Layout tab="tsys" title="Type systems implemented by your favorite programming languages!" mainClasses="overflow-y-auto">
      <article class={tw(PROSE, "p-4")}>
        <h1>Type Systems</h1>
        {tsys.isEmpty ? <p>No type systems just yet!</p> : <Table thead={thead} tbody={tbody} />}
      </article>
    </Layout>
  );
}
