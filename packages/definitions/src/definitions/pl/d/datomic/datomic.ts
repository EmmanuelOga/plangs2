import type { PlangsGraph } from "@plangs/plangs";

export function define(g: PlangsGraph) {
  g.nodes.pl
    .set("pl+datomic", {
      name: "Datomic",
      description:
        "Datomic is a distributed database and implementation of Datalog. It supports ACID transactions, joins, and a logical query language, Datalog. A distinguishing feature of Datomic is its immutable data model where time is a basic feature of data entities, allowing for temporal queries.",
      keywords: ["ACID", "Datalog", "NoSQL", "datomic", "distributed database"],
      releases: [{ version: "1.0.7180", name: "Stable release", date: "2024-07-11" }],
      extWikipediaPath: "Datomic",
      extHomeURL: "http://datomic.com/",
      created: "2012",
    })
    .relDialectOf.add(["pl+datalog"])
    .relImplements.add(["pl+datalog"])
    .relLicenses.add(["license+apache"])
    .relParadigms.add(["paradigm+declarative", "paradigm+distributed", "paradigm+logic", "paradigm+query"])
    .relPlatforms.add(["plat+cross", "plat+java"])
    .relTags.add(["tag+dataflow", "tag+dbms"])
    .relWrittenIn.add(["pl+clojure", "pl+java"]);

  // TOOLS

  // TOOL BUNDLES

  // LIBRARIES

  // APPS
}
