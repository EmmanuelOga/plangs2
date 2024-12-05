import { PROSE, tw } from "@plangs/frontend/auxiliar/styles";
import { vertexInfo } from "@plangs/frontend/components/vertex-info";
import type { RelFrom, RelTo } from "@plangs/graphgen/library";
import type { PlangsGraph } from "@plangs/plangs/graph";
import type { TPlangsVertexClass } from "@plangs/plangs/graph/generated";
import { Layout } from "@plangs/server/components/layout";
import { Table } from "@plangs/server/components/table";
import { VertexLink } from "../components/vertex-link";

/** Relations we want to create a section for, in the order we want them to render. */
const RELATIONS = [
  ["relPosts", "News"],
  ["relPlangs", "Plangs"],
  ["relWrittenWith", "Written With"],
  ["relTools", "Tools"],
  ["relApps", "Applications"],
  ["relLibraries", "Libraries"],
  ["relLearning", "Learning Resources"],
  ["relCommunities", "Communities"],
] as const;

export function Vertex({ pg, vertex }: { pg: PlangsGraph; vertex: TPlangsVertexClass }) {
  return (
    <Layout
      tab="pl"
      title={`${vertex.name} at https://plangs.page`}
      description={`${vertex.name} at https://plangs.page: A language is much more than just a syntax and semantics. It's an ecosystem of tools, libraries, applications, learning resources, and more!.`}
      mainClasses={tw("overflow-y-scroll")}>
      <article class={tw("p-4", PROSE)}>
        {vertexInfo({ vertex, tab: "pl", open: false })}

        {RELATIONS.map(([rel, title]) => (
          <VertexRelation key={rel} vertex={vertex} rel={rel} title={title} />
        ))}
      </article>
    </Layout>
  );
}

function VertexRelation({ vertex, rel, title }: { vertex: TPlangsVertexClass; rel: string; title: string }) {
  type Rels = keyof TPlangsVertexClass["relations"];

  const relation = vertex[rel as keyof typeof vertex] as
    | RelTo<TPlangsVertexClass, TPlangsVertexClass>
    | RelFrom<TPlangsVertexClass, TPlangsVertexClass>;

  if (!relation) return null;
  const relVertices = relation.values;
  if (relVertices.length === 0) return null;

  return (
    <div class="mt-4 mb-16">
      <h2 class="mt-0!">{title}</h2>
      {relVertices.length === 0 ? (
        <p>No applications just yet!</p>
      ) : (
        <Table headers={["Name", "Keywords", "Description"]}>
          {relVertices.map(vertex => (
            <tr key={vertex.key}>
              <td>
                <a href={vertex.href} title={vertex.name} children={vertex.name} />
              </td>
              <td>{vertex.keywords.join(", ")}</td>
              <td>{vertex.description}</td>
            </tr>
          ))}
        </Table>
      )}
    </div>
  );
}
