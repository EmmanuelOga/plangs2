import type { PlangsGraph } from "@plangs/plangs";

export function define(g: PlangsGraph) {
  g.nodes.pl
    .set("pl+standard-ml", {
      name: "Standard ML",
      description:
        "Standard ML (SML) is a general-purpose, high-level, modular, functional programming language with compile-time type checking and type inference. It is popular for writing compilers, for programming language research, and for developing theorem provers.",
      keywords: ["Standard ML", "SML"],
      websites: [
        { title: "smlfamily.github.io", href: "https://smlfamily.github.io/", kind: "homepage" },
        { title: "Standard ML", href: "https://en.wikipedia.org/wiki/Standard_ML", kind: "wikipedia" },
      ],
      extensions: [".sml", ".sig"],
      firstAppeared: "1983-01-01",
      isTranspiler: false,
      isMainstream: false,
    })
    .addDialectOf(["pl+ml"])
    .addInfluencedBy(["pl+ml", "pl+pascal"])
    .addLicenses(["license+bsd"])
    .addParadigms(["paradigm+functional", "paradigm+imperative", "paradigm+modular", "paradigm+multi"])
    .addPlatforms(["plat+bsd", "plat+cross", "plat+linux"])
    .addTags(["tag+app", "tag+compiler", "tag+industrial", "tag+interpreter", "tag+proofs", "tag+ray-tracer"])
    .addTypeSystems(["tsys+inferred", "tsys+static", "tsys+strong"])
    .addWrittenIn(["pl+c"]);
}
