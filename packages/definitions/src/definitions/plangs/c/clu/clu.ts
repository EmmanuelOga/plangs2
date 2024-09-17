import type { PlangsGraph } from "@plangs/plangs";

export function define(g: PlangsGraph) {
  g.nodes.pl
    .set("pl+clu", {
      name: "CLU",
      description:
        "CLU is a  programming language created at the Massachusetts Institute of Technology (MIT) by Barbara Liskov and her students starting in 1973. While it did not find extensive use, it introduced many features that are used widely now, and is seen as a step in the development of object-oriented programming (OOP).",
      firstAppeared: "1975-01-01",
      websites: [
        { href: "http://pmg.csail.mit.edu/CLU.html", title: "pmg.csail.mit.edu/CLU.html", kind: "other" },
        { href: "https://en.wikipedia.org/wiki/CLU_(programming_language)", title: "CLU", kind: "wikipedia" },
      ],
      releases: [{ version: "1.5", date: "1989-01-01" }],
    })
    .addInfluencedBy(["pl+lisp", "pl+simula"])
    .addParadigms(["paradigm+multi", "paradigm+oop", "paradigm+procedural"])
    .addTags(["tag+interpreter"])
    .addTypeSystems(["tsys+strong"]);
}
