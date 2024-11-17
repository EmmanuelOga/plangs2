import type { PlangsGraph } from "@plangs/plangs";

export function define(g: PlangsGraph) {
  g.nodes.pl
    .set("pl+mojo", {
      name: "Mojo",
      description:
        "Mojo is a programming language in the Python family, designed to deliver Python's expressiveness with the performance of C, and is particularly geared towards AI development, supporting high-performance computing on diverse hardware.",
      keywords: ["AI", "modular", "mojo", "performance", "programming"],
      extensions: [".mojo", ".🔥"],
      year: 2023,
      stackovTags: ["mojolang"],
      githubName: "Mojo",
      languishRanking: 208,
      githubLangId: "1045019587",
      githubColor: "#ff4c1f",
      githubPopular: false,
      githubType: "programming",
      isMainstream: false,
      releases: [{ version: "24.4", name: "Preview release", date: "2024-05-24" }],
      extWikipediaPath: "Mojo_(programming_language)",
      extRedditPath: "MojoLang",
      extHomeURL: "https://www.modular.com/mojo",
    })
    .addInfluencedBy(["pl+python", "pl+swift"])
    .addLicenses(["license+apache"])
    .addParadigms(["paradigm+compiled", "paradigm+functional", "paradigm+general-purpose", "paradigm+imperative", "paradigm+multi"])
    .addPlatforms(["plat+apple", "plat+cross", "plat+linux"])
    .addTags(["tag+automation", "tag+scripting"])
    .addTypeSystems(["tsys+affine", "tsys+duck", "tsys+dynamic", "tsys+generic", "tsys+inferred", "tsys+nominal", "tsys+static", "tsys+strong"]);

  // TOOLS

  // TOOL BUNDLES

  // LIBRARIES

  // APPS
}
