import type { PlangsGraph } from "@plangs/plangs";

export function define(g: PlangsGraph) {
  g.nodes.pl
    .set("pl+modula", {
      name: "Modula",
      description:
        "The Modula programming language is a descendant of the Pascal language. It was developed in Switzerland, at ETH Zurich, in the mid-1970s by Niklaus Wirth, the same person who designed Pascal. The main innovation of Modula over Pascal is a module system, used for grouping sets of related declarations into program units; hence the name Modula. The language is defined in a report by Wirth called Modula. A language for modular multiprogramming published 1976.",
      firstAppeared: "1975-01-01",
      websites: [{ href: "https://en.wikipedia.org/wiki/Modula_programming_language", title: "Modula", kind: "wikipedia" }],
    })
    .addInfluencedBy(["pl+pascal"])
    .addParadigms(["paradigm+imperative", "paradigm+modular", "paradigm+structured"])
    .addTags(["tag+interpreter"])
    .addTypeSystems(["tsys+safe", "tsys+static", "tsys+strong"]);
}
