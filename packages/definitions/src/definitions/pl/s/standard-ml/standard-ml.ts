import type { PlangsGraph } from "@plangs/plangs/graph";

export function define(g: PlangsGraph) {
  g.plang
    .set("pl+standard-ml", {
      name: "Standard ML",
      description:
        "Standard ML (SML) is a general-purpose, high-level, modular, functional programming language with compile-time type checking and type inference. It is popular for writing compilers, for programming language research, and for developing theorem provers.",
      keywords: ["SML", "Standard ML"],
      extensions: [".sig", ".sml"],
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
      created: "1983",
    })
    .relInfluence.add(["pl+pascal"])
    .relLicense.add(["lic+bsd"])
    .relParadigm.add(["para+functional", "para+imperative", "para+modular", "para+multi"])
    .relPlatform.add(["plat+bsd", "plat+cross", "plat+linux"])
    .relTag.add(["tag+app", "tag+compiler", "tag+edu", "tag+industrial", "tag+interpreters", "tag+proofs", "tag+ray-tracer"])
    .relTypeSystem.add(["tsys+inferred", "tsys+static", "tsys+strong"])
    .relWrittenInPlang.add(["pl+c"]);

  // TOOLS

  // TOOL BUNDLES

  // LIBRARIES

  // APPS
}
