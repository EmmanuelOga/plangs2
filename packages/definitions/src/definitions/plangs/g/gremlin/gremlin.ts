import type { PlangsGraph } from "@plangs/plangs";

export function define(g: PlangsGraph) {
  g.nodes.pl
    .set("pl+gremlin", {
      name: "Gremlin",
      description:
        "Gremlin is a graph traversal language and virtual machine developed by Apache TinkerPop of the Apache Software Foundation. It works for both OLTP-based graph databases and OLAP-based graph processors. Gremlin's automata and functional language foundation enable it to support both imperative and declarative querying. It is designed to be host language agnostic and allows for user-defined domain specific languages.",
      keywords: ["apache", "graph traversal", "gremlin", "tinkerpop"],
      websites: [
        { title: "Apache TinkerPop: Home", href: "https://tinkerpop.apache.org/", kind: "homepage" },
        { title: "Gremlin (query language) - Wikipedia", href: "https://en.wikipedia.org/wiki/Gremlin_(programming_language)", kind: "wikipedia" },
      ],
      year: 2009,
      isMainstream: true,
      releases: [{ version: "3.7.0", name: "Gremlin 3.7.0", date: "2023-07-31" }],
    })
    .addInfluencedBy(["pl+sql", "pl+xpath"])
    .addLicenses(["license+apache"])
    .addParadigms(["paradigm+declarative", "paradigm+dsl", "paradigm+imperative", "paradigm+query"])
    .addPlatforms(["plat+cross"])
    .addTags(["tag+compiler", "tag+dbms", "tag+graph"]);

  // TOOLS

  // TOOL BUNDLES

  // LIBRARIES

  // APPS
}
