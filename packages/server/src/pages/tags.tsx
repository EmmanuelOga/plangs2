import { Anchor } from "@plangs/frontend/components/misc/anchor";
import { PROSE } from "@plangs/frontend/styles";
import { tw } from "@plangs/frontend/utils";
import type { PlangsGraph } from "@plangs/plangs";

import { Layout } from "../components/layout";
import { Table } from "../components/table";

export function Tags({ pg }: { pg: PlangsGraph }) {
  const thead = (
    <tr>
      <th>Name</th>
      <th>Description</th>
      <th>Keywords</th>
      <th>Websites</th>
    </tr>
  );
  const tags = pg.nodes.tag.values;
  const tbody = tags.map(tsys => (
    <tr key={tsys.key}>
      <td>{tsys.name}</td>
      <td>{tsys.description}</td>
      <td>{tsys.keywords.join(", ")}</td>
      <td>{tsys.websites.map(link => <Anchor key={link.href} link={link} />).existing}</td>
    </tr>
  )).existing;
  return (
    <Layout tab="tags" title="Tags used across Plangs! for categorization." mainClasses="overflow-y-auto">
      <article class={tw(PROSE, "p-4")}>
        <h1>Tags</h1>
        {tags.isEmpty ? <p>No tags just yet!</p> : <Table thead={thead} tbody={tbody} />}
      </article>
    </Layout>
  );
}
