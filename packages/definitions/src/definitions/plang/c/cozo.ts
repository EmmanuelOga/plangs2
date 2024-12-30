import type { PlangsGraph } from "@plangs/plangs/graph";

export function define(g: PlangsGraph) {
  g.plang
    .set("pl+cozo", {
      name: "Cozo",
      description: "A transactional, relational-graph-vector database leveraging Datalog for complex queries and data management.",
      shortDesc: "A database leveraging Datalog for queries.",
      created: "2022-03",
      extensions: [".cozo"],
      extGithubPath: "cozodb/cozo",
      extHomeURL: "https://cozodb.org/",
      isTranspiler: false,
      keywords: ["datalog", "relational-graph-vector", "transactional-db"],
    })
    .relImplements.add("pl+datalog")
    .relLicenses.add("lic+apache")
    .relParadigms.add("para+dataflow", "para+declarative", "para+logic")
    .relPlatforms.add("plat+cross")
    .relTags.add("tag+dbms", "tag+graph");
}
