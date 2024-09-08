import type { PlangsGraph } from "@plangs/plangs";

export function define(g: PlangsGraph) {
  g.n_plang
    .set("pl+modula", {
      images: [],
      name: "Modula",
      description:
        "The Modula programming language is a descendant of the Pascal language. It was developed in Switzerland, at ETH Zurich, in the mid-1970s by Niklaus Wirth, the same person who designed Pascal. The main innovation of Modula over Pascal is a module system, used for grouping sets of related declarations into program units; hence the name Modula. The language is defined in a report by Wirth called Modula. A language for modular multiprogramming published 1976.",
      websites: [{ href: "https://en.wikipedia.org/wiki/Modula_programming_language", title: "Modula", kind: "wikipedia" }],
      extensions: [],
      releases: [],
    })
    .addInfluencedBy(["pl+pascal"])
    .addParadigms(["para+imperative", "para+modular", "para+structured"])
    .addTypeSystems(["tsys+safe", "tsys+static", "tsys+strong"]);
}
