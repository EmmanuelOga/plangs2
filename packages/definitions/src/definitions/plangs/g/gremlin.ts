import type { PlangsGraph } from "@plangs/plangs";

export function define(g: PlangsGraph) {
  g.n_plang
    .set("pl+gremlin", {
      images: [{ title: "Gremlin", kind: "other", url: "/images/plangs/g/gremlin/main.png" }],
      name: "Gremlin",
      description:
        "Gremlin is a graph traversal language and virtual machine developed by Apache TinkerPop of the Apache Software Foundation. Gremlin works for both OLTP-based graph databases as well as OLAP-based graph processors. Gremlin's automata and functional language foundation enable Gremlin to naturally support: imperative and declarative querying; host language agnosticism; user-defined domain specific languages; an extensible compiler/optimizer, single- and multi-machine execution models; hybrid depth- and breadth-first evaluation with Turing completeness.",
      websites: [
        { href: "https://tinkerpop.apache.org/", title: "tinkerpop.apache.org", kind: "other" },
        { href: "https://en.wikipedia.org/wiki/Gremlin_(programming_language)", title: "Gremlin", kind: "wikipedia" },
      ],
      extensions: [],
      releases: [{ version: "3.7.0", date: "2023-01-01" }],
    })
    .addInfluencedBy(["pl+sql", "pl+xpath"])
    .addLicenses(["lic+apache"])
    .addPlatforms(["platf+cross"]);
}
