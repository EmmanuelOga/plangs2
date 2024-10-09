import type { PlangsGraph } from "@plangs/plangs";

export function define(g: PlangsGraph) {
  g.nodes.pl
    .set("pl+gremlin", {
      name: "Gremlin",
      description:
        "Gremlin is a graph traversal language and virtual machine developed by Apache TinkerPop of the Apache Software Foundation. Gremlin works for both OLTP-based graph databases as well as OLAP-based graph processors. Gremlin's automata and functional language foundation enable Gremlin to naturally support: imperative and declarative querying; host language agnosticism; user-defined domain specific languages; an extensible compiler/optimizer, single- and multi-machine execution models; hybrid depth- and breadth-first evaluation with Turing completeness.",
      keywords: ["gremlin", "tinkerpop"],
      websites: [
        { title: "tinkerpop.apache.org", href: "https://tinkerpop.apache.org/", kind: "homepage" },
        { title: "Gremlin", href: "https://en.wikipedia.org/wiki/Gremlin_(programming_language)", kind: "wikipedia" },
      ],
      firstAppeared: "2009-01-01",
      isTranspiler: false,
      isMainstream: true,
      releases: [{ version: "3.7.0", name: "Gremlin 3.7.0", date: "2023-01-01" }],
    })
    .addInfluencedBy(["pl+sql", "pl+xpath"])
    .addLicenses(["license+apache"])
    .addParadigms(["paradigm+dsl", "paradigm+query"])
    .addPlatforms(["plat+cross"])
    .addTags(["tag+compiler", "tag+dbms"]);
}
