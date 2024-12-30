import type { PlangsGraph } from "@plangs/plangs/graph";

export function define(g: PlangsGraph) {
  g.plang
    .set("pl+gremlin", {
      name: "Gremlin",
      description:
        "Graph traversal language and virtual machine developed by Apache TinkerPop of the Apache Software Foundation. It works for both OLTP-based graph databases and OLAP-based graph processors. Gremlin's automata and functional language foundation enable it to support both imperative and declarative querying. It is designed to be host language agnostic and allows for user-defined domain specific languages.",
      shortDesc: "Graph traversal language and virtual machine developed by Apache TinkerPop.",
      created: "2009",
      extGithubPath: "apache/tinkerpop",
      extHomeURL: "https://tinkerpop.apache.org/gremlin.html",
      extWikipediaPath: "Gremlin_(programming_language)",
      githubStars: 2000,
      isTranspiler: false,
      keywords: ["apache", "graph traversal", "gremlin", "tinkerpop"],
      releases: [{ version: "3.7.0", name: "Gremlin 3.7.0", date: "2023-07-31" }],
    })
    .relInfluencedBy.add("pl+sql", "pl+xpath")
    .relLicenses.add("lic+apache")
    .relParadigms.add("para+declarative", "para+dsl", "para+imperative", "para+query")
    .relPlatforms.add("plat+cross")
    .relTags.add("tag+compiler", "tag+dbms", "tag+graph");
}
