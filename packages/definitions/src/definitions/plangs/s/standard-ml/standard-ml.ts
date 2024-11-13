import type { PlangsGraph } from "@plangs/plangs";

export function define(g: PlangsGraph) {
  g.nodes.pl
    .set("pl+standard-ml", {
      name: "Standard ML",
      description:
        "Standard ML (SML) is a general-purpose, high-level, modular, functional programming language with compile-time type checking and type inference. It is popular for writing compilers, for programming language research, and for developing theorem provers.",
      keywords: ["SML", "Standard ML"],
      websites: [
        { title: "smlfamily.github.io", href: "https://smlfamily.github.io/", kind: "homepage" },
        { title: "Standard ML", href: "https://en.wikipedia.org/wiki/Standard_ML", kind: "wikipedia" },
        { title: "Standard ML on Reddit", kind: "reddit", href: "https://reddit.com/r/sml" },
      ],
      extensions: [".sig", ".sml"],
      year: 1983,
      isTranspiler: false,
      isMainstream: false,
      stackovTags: ["sml"],
      githubName: "Standard ML",
      languishRanking: 194,
      githubLangId: "357",
      githubColor: "#dc566d",
      githubPopular: false,
      githubType: "programming",
    })
    .addDialectOf(["pl+ml"])
    .addInfluencedBy(["pl+ml", "pl+pascal"])
    .addLicenses(["license+bsd"])
    .addParadigms(["paradigm+functional", "paradigm+imperative", "paradigm+modular", "paradigm+multi"])
    .addPlatforms(["plat+bsd", "plat+cross", "plat+linux"])
    .addTags(["tag+app", "tag+compiler", "tag+industrial", "tag+interpreter", "tag+proofs", "tag+ray-tracer"])
    .addTypeSystems(["tsys+inferred", "tsys+static", "tsys+strong"])
    .addWrittenIn(["pl+c"]);

  // TOOLS

  // TOOL BUNDLES

  // LIBRARIES

  // APPS
}
