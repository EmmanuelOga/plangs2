import type { PlangsGraph } from "@plangs/plangs/graph";

export function define(g: PlangsGraph) {
  g.plang
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
    .relImplement.add(["pl+datalog"])
    .relLicense.add(["lic+apache"])
    .relParadigm.add(["para+declarative", "para+distributed", "para+logic", "para+query"])
    .relPlatform.add(["plat+cross", "plat+java"])
    .relTag.add(["tag+dataflow", "tag+dbms"])
    .relWrittenInPlang.add(["pl+clojure", "pl+java"]);

  // TOOLS

  // TOOL BUNDLES

  // LIBRARIES

  // APPS
}
