import type { PlangsGraph } from "@plangs/plangs/graph";

export function define(g: PlangsGraph) {
  g.plang
    .set("pl+standard-ml", {
      name: "Standard ML",
      description:
        "Standard ML is a general-purpose, high-level, modular, functional programming language with compile-time type checking and type inference. It is popular for writing compilers, for programming language research, and for developing theorem provers.",
      shortDesc: "Functional programming language known for its type inference and usage in compiler writing.",
      created: "1983",
      extensions: [".sig", ".sml"],
      extRedditPath: "sml",
      extWikipediaPath: "Standard_ML",
      githubColor: "#dc566d",
      githubLangId: "357",
      githubName: "Standard ML",
      githubPopular: false,
      githubType: "programming",
      isTranspiler: false,
      keywords: ["SML", "Standard ML"],
      languishRanking: 194,
      releases: [{ version: "SML '97", name: "Standard ML '97", date: "1997" }],
      stackovTags: ["sml"],
    })
    .relInfluencedBy.add("pl+pascal")
    .relLicenses.add("lic+bsd")
    .relParadigms.add("para+functional", "para+imperative", "para+modular", "para+multi")
    .relPlatforms.add("plat+bsd", "plat+cross", "plat+linux")
    .relTags.add("tag+app", "tag+compiler", "tag+edu", "tag+industrial", "tag+interpreters", "tag+proofs", "tag+ray-tracer")
    .relTypeSystems.add("tsys+inferred", "tsys+static", "tsys+strong")
    .relWrittenWith.add("pl+c");

  // TOOLS

  // TOOL BUNDLES

  // LIBRARIES

  // APPS
}
