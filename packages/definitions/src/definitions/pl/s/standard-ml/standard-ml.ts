import type { PlangsGraph } from "@plangs/plangs";

export function define(g: PlangsGraph) {
  g.nodes.pl
    .set("pl+standard-ml", {
      name: "Standard ML",
      description:
        "Standard ML (SML) is a general-purpose, high-level, modular, functional programming language with compile-time type checking and type inference. It is popular for writing compilers, for programming language research, and for developing theorem provers.",
      keywords: ["SML", "Standard ML"],
      extensions: [".sig", ".sml"],
      year: 1983,
      isMainstream: false,
      stackovTags: ["sml"],
      githubName: "Standard ML",
      languishRanking: 194,
      githubLangId: "357",
      githubColor: "#dc566d",
      githubPopular: false,
      githubType: "programming",
      releases: [{ version: "SML '97", name: "Standard ML '97", date: "1997" }],
      extWikipediaPath: "Standard_ML",
      extRedditPath: "sml",
      extHomeURL: "https://smlfamily.github.io/",
    })
    .addDialectOf(["pl+ml"])
    .addInfluencedBy(["pl+ml", "pl+pascal"])
    .addLicenses(["license+bsd"])
    .addParadigms(["paradigm+functional", "paradigm+imperative", "paradigm+modular", "paradigm+multi"])
    .addPlatforms(["plat+bsd", "plat+cross", "plat+linux"])
    .addTags(["tag+app", "tag+compiler", "tag+edu", "tag+industrial", "tag+interpreter", "tag+proofs", "tag+ray-tracer"])
    .addTypeSystems(["tsys+inferred", "tsys+static", "tsys+strong"])
    .addWrittenIn(["pl+c"]);

  // TOOLS

  // TOOL BUNDLES

  // LIBRARIES

  // APPS
}
