import { PROSE, tw } from "@plangs/frontend/auxiliar/styles";
import { VertexInfo } from "@plangs/frontend/components/vertex-info/vertex-info";
import type { RelFrom, RelTo } from "@plangs/graphgen/library";
import type { PlangsGraph, VPost } from "@plangs/plangs/graph";
import type { TPlangsVertex } from "@plangs/plangs/graph/generated";
import { Layout, type PlangsPage } from "@plangs/server/components/layout";
import { Table } from "@plangs/server/components/table";
import { cssClass } from "../elements";

/** Relations we want to create a section for, in the order we want them to render. */
const RELATIONS = [
  ["relPosts", "News"],
  ["relTools", "Tools"],
  ["relBundles", "Bundles", "A bundle is a collection of tools that work well together."],
  ["relApps", "Applications"],
  ["relLibraries", "Libraries"],
  ["relPlangs", "Plangs"],
  ["relWrittenWith", "Written With"],
  ["relLearning", "Learning Resources"],
  ["relCommunities", "Communities"],
] as const;

export function Vertex({ page, vertex }: { pg: PlangsGraph; page: PlangsPage; vertex: TPlangsVertex }) {
  return (
    <Layout
      page={page}
      title={`${vertex.name} at Plangs!`}
      desc={`${vertex.name} at Plangs!: A Programming Language is much more than just a syntax and semantics. It's an Ecosystem of Tools, Libraries, Applications, Learning Resources, and more!`}
      mainClasses={tw("overflow-y-scroll")}>
      <article class={tw("p-2 pt-4", PROSE)}>
        <div class={tw(cssClass("vertexInfo"), "mb-8")} data-open={false}>
          <VertexInfo detail={vertex.detail} page={page} open={false} />
        </div>

        {RELATIONS.map(([rel, title, desc]) => (
          <VertexRelation key={rel} vertex={vertex} rel={rel} title={title} desc={desc} />
        ))}
      </article>
    </Layout>
  );
}

function VertexRelation({ vertex, rel, title, desc }: { vertex: TPlangsVertex; rel: string; title: string; desc?: string }) {
  type Direct = RelTo<TPlangsVertex, TPlangsVertex>;
  type Indirect = RelFrom<TPlangsVertex, TPlangsVertex>;
  const relation = vertex[rel as keyof typeof vertex] as Direct | Indirect;

  if (!relation) return null;
  const relVertices = relation.values.filter(related => related.key !== vertex.key);
  if (relVertices.length === 0) return null;

  const isNews = rel === "relPosts";
  const link = (v: TPlangsVertex) => <a href={v.href} title={v.name} children={v.name} />;

  return (
    <div class="mb-8">
      <h2 class="mt-0!">{title}</h2>
      {desc && <p>{desc}</p>}
      {
        <Table headers={isNews ? ["Date", "Post"] : ["Name", "Description"]}>
          {relVertices.map(v => (
            <tr key={v.key} class={tw("hover:bg-hiliteb/10")}>
              <th class={tw("truncate", "min-w-[20%] max-w-[25%]")}>{isNews ? (v as VPost).date : link(v)}</th>
              <td>{isNews ? link(v) : v.shortDesc}</td>
            </tr>
          ))}
        </Table>
      }
    </div>
  );
}
