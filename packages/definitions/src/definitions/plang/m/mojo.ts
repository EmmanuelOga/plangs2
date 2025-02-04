import type { PlangsGraph } from "@plangs/plangs/graph";

export function define(g: PlangsGraph) {
  g.plang
    .set("pl+mojo", {
      name: "Mojo",
      description:
        "Modular programming language designed for high-performance and AI-specific applications. It builds on Python's ease of use, aiming to provide the expressiveness of Python with the efficiency of C, targeting diverse hardware environments.",
      shortDesc:
        "Modular language blending Python's syntax with C-like performance.",
      created: "2023",
      extensions: [".mojo", ".🔥"],
      extGithubPath: "modularml/mojo",
      extHomeURL: "https://www.modular.com/mojo",
      extRedditPath: "MojoLang",
      extWikipediaPath: "Mojo_(programming_language)",
      githubColor: "#ff4c1f",
      githubLangId: "1045019587",
      githubName: "Mojo",
      githubPopular: false,
      githubStars: 23400,
      githubType: "programming",
      isTranspiler: false,
      keywords: ["AI", "high-performance", "modular", "mojo", "python-based"],
      languishRanking: 261,
      releases: [
        { version: "24.4", name: "Preview release", date: "2024-05-24" },
      ],
      stackovTags: ["mojolang"],
    })
    .relInfluencedBy.add("pl+python", "pl+swift")
    .relLicenses.add("lic+apache", "lic+mit")
    .relParadigms.add(
      "para+compiled",
      "para+functional",
      "para+general-purpose",
      "para+imperative",
      "para+multi",
      "para+scripting",
    )
    .relPlatforms.add("plat+apple", "plat+cross", "plat+linux")
    .relTags.add("tag+automation", "tag+scripting")
    .relTypeSystems.add(
      "tsys+affine",
      "tsys+duck",
      "tsys+dynamic",
      "tsys+generic",
      "tsys+inferred",
      "tsys+nominal",
      "tsys+object",
      "tsys+static",
      "tsys+strong",
    );
}
