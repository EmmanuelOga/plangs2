import type { PlangsGraph } from "@plangs/plangs/graph";

export function define(g: PlangsGraph) {
  g.plang
    .set("pl+mojo", {
      name: "Mojo",
      description:
        "Mojo is a modular programming language designed for high-performance and AI-specific applications. It builds on Python's ease of use, aiming to provide the expressiveness of Python with the efficiency of C, targeting diverse hardware environments.",
      keywords: ["AI", "high-performance", "modular", "mojo", "python-based"],
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
      isTranspiler: false,
      shortDesc: "Mojo is a modular language blending Python's syntax with C-like performance.",
      githubStars: 23400,
      extGithubPath: "modularml/mojo",
    })
    .relInfluencedBy.add("pl+python", "pl+swift")
    .relLicenses.add("lic+apache", "lic+mit")
    .relParadigms.add("para+compiled", "para+functional", "para+general-purpose", "para+imperative", "para+multi", "para+scripting")
    .relPlatforms.add("plat+apple", "plat+cross", "plat+linux")
    .relTags.add("tag+automation", "tag+scripting")
    .relTypeSystems.add("tsys+affine", "tsys+duck", "tsys+dynamic", "tsys+generic", "tsys+inferred", "tsys+nominal", "tsys+static", "tsys+strong");

  // TOOLS

  // TOOL BUNDLES

  // LIBRARIES

  // APPS
}
