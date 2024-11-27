import type { PlangsGraph } from "@plangs/plangs/graph";

export function define(g: PlangsGraph) {
  g.plang
    .set("pl+gremlin", {
      name: "Gremlin",
      description:
        "Gremlin is a graph traversal language and virtual machine developed by Apache TinkerPop of the Apache Software Foundation. It works for both OLTP-based graph databases and OLAP-based graph processors. Gremlin's automata and functional language foundation enable it to support both imperative and declarative querying. It is designed to be host language agnostic and allows for user-defined domain specific languages.",
      keywords: ["apache", "graph traversal", "gremlin", "tinkerpop"],
      releases: [{ version: "3.7.0", name: "Gremlin 3.7.0", date: "2023-07-31" }],
      extWikipediaPath: "Gremlin_(programming_language)",
      extHomeURL: "https://tinkerpop.apache.org/",
      created: "2009",
    })
    .relInfluencedBy.add(["pl+sql", "pl+xpath"])
    .relLicense.add(["lic+apache"])
    .relParadigm.add(["para+declarative", "para+dsl", "para+imperative", "para+query"])
    .relPlatform.add(["plat+cross"])
    .relTag.add(["tag+compiler", "tag+dbms", "tag+graph"]);

  // TOOLS

  // TOOL BUNDLES

  // LIBRARIES

  // APPS
}
