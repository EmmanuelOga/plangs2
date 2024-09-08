import type { PlangsGraph } from "@plangs/plangs";

export function define(g: PlangsGraph) {
  g.n_plang
    .set("pl+standard-ml", {
      images: [],
      name: "Standard ML",
      description:
        "Standard ML (SML) is a general-purpose, high-level, modular, functional programming language with compile-time type checking and type inference. It is popular for writing compilers, for programming language research, and for developing theorem provers.",
      websites: [
        { href: "https://smlfamily.github.io/", title: "smlfamily.github.io", kind: "repository" },
        { href: "https://en.wikipedia.org/wiki/Standard_ML", title: "Standard ML", kind: "wikipedia" },
      ],
      extensions: [".sml"],
      releases: [],
    })
    .addDialectOf(["pl+ml"])
    .addInfluencedBy(["pl+ml", "pl+pascal"])
    .addParadigms(["para+functional", "para+imperative", "para+modular", "para+multi"])
    .addTypeSystems(["tsys+inferred", "tsys+static", "tsys+strong"]);
}
