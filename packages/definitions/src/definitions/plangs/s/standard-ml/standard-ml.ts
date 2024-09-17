import type { PlangsGraph } from "@plangs/plangs";

export function define(g: PlangsGraph) {
  g.nodes.pl
    .set("pl+standard-ml", {
      name: "Standard ML",
      description:
        "Standard ML (SML) is a general-purpose, high-level, modular, functional programming language with compile-time type checking and type inference. It is popular for writing compilers, for programming language research, and for developing theorem provers.",
      firstAppeared: "1983-01-01",
      extensions: [".sml"],
      websites: [
        { href: "https://smlfamily.github.io/", title: "smlfamily.github.io", kind: "repository" },
        { href: "https://en.wikipedia.org/wiki/Standard_ML", title: "Standard ML", kind: "wikipedia" },
      ],
    })
    .addDialectOf(["pl+ml"])
    .addInfluencedBy(["pl+ml", "pl+pascal"])
    .addParadigms(["paradigm+functional", "paradigm+imperative", "paradigm+modular", "paradigm+multi"])
    .addTags(["tag+app", "tag+compiler", "tag+if", "tag+industrial", "tag+interpreter", "tag+proofs", "tag+ray-tracer"])
    .addTypeSystems(["tsys+inferred", "tsys+static", "tsys+strong"]);
}
