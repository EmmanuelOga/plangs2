import type { PlangsGraph } from "@plangs/plangs/graph";

export function define(g: PlangsGraph) {
  g.plang.    .set("pl+mojo", {
      name: "Mojo",
      description:
        "Mojo is a programming language in the Python family, designed to deliver Python's expressiveness with the performance of C, and is particularly geared towards AI development, supporting high-performance computing on diverse hardware.",
      keywords: ["AI", "modular", "mojo", "performance", "programming"],
      extensions: [".mojo", ".🔥"],
      stackovTags: ["mojolang"],
      githubName: "Mojo",
      languishRanking: 208,
      githubLangId: "1045019587",
      githubColor: "#ff4c1f",
      githubPopular: false,
      githubType: "programming",
      releases: [{ version: "24.4", name: "Preview release", date: "2024-05-24" }],
      extWikipediaPath: "Mojo_(programming_language)",
      extRedditPath: "MojoLang",
      extHomeURL: "https://www.modular.com/mojo",
      created: "2023",
    })
    .relInfluencedBy.add(["pl+python", "pl+swift"])
    .relLicense.add(["license+apache"])
    .relParadigm.add(["para+compiled", "para+functional", "para+general-purpose", "para+imperative", "para+multi"])
    .relPlatforms.add(["plat+apple", "plat+cross", "plat+linux"])
    .relTags.add(["tag+automation", "tag+scripting"])
    .relTsys.add(["tsys+affine", "tsys+duck", "tsys+dynamic", "tsys+generic", "tsys+inferred", "tsys+nominal", "tsys+static", "tsys+strong"]);

  // TOOLS

  // TOOL BUNDLES

  // LIBRARIES

  // APPS
}
