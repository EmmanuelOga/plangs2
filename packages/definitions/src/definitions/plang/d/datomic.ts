import type { PlangsGraph } from "@plangs/plangs/graph";

export function define(g: PlangsGraph) {
  g.plang
    .set("pl+datomic", {
      name: "Datomic",
      description:
        "Distributed database and implementation of Datalog. It supports ACID transactions, joins, and a logical query language, Datalog. A distinguishing feature of Datomic is its immutable data model where time is a basic feature of data entities, allowing for temporal queries.",
      shortDesc: "Distributed database with an immutable data model and Datalog implementation.",
      created: "2012",
      extHomeURL: "http://datomic.com/",
      extWikipediaPath: "Datomic",
      isTranspiler: false,
      keywords: ["acid", "datalog", "datomic", "distributed-database", "nosql"],
      releases: [{ version: "1.0.7180", name: "Stable release", date: "2024-07-11" }],
    })
    .relDialectOf.add("pl+datalog")
    .relImplements.add("pl+datalog")
    .relLicenses.add("lic+apache")
    .relParadigms.add("para+declarative", "para+distributed", "para+logic", "para+query")
    .relPlatforms.add("plat+cross", "plat+java")
    .relTags.add("tag+dataflow", "tag+dbms")
    .relWrittenWith.add("pl+clojure", "pl+java");
}
