import type { PlangsGraph } from "@plangs/plangs/graph";

export function define(g: PlangsGraph) {
  g.plang
    .set("pl+jq", {
      name: "jq",
      description:
        "jq is a lightweight and flexible command-line JSON processor, allowing for easy manipulation and transformation of JSON data with a functional programming paradigm.",
      keywords: ["jq"],
      extensions: [".jq"],
      releases: [{ version: "1.7.1", date: "2023-12-13" }],
      stackovTags: ["jq"],
      githubName: "jq",
      languishRanking: 102,
      githubLangId: "905371884",
      githubColor: "#c7254e",
      githubPopular: false,
      githubType: "programming",
      extWikipediaPath: "Jq_(programming_language)",
      extHomeURL: "https://jqlang.github.io/jq/",
      created: "2012",
      isTranspiler: false,
      shortDesc: "jq is a lightweight and flexible command-line JSON processor.",
      githubStars: 30700,
      extGithubPath: "jqlang/jq",
    })
    .relInfluencedBy.add("pl+haskell")
    .relLicenses.add("lic+mit", "lic+public-domain")
    .relParadigms.add("para+functional", "para+point-free", "para+query", "para+scripting")
    .relPlatforms.add("plat+bsd", "plat+cross", "plat+linux", "plat+windows")
    .relTags.add("tag+cli", "tag+interpreters", "tag+shell", "tag+workflow")
    .relTypeSystems.add("tsys+strong")
    .relWrittenWith.add("pl+c");

  // TOOLS

  // TOOL BUNDLES

  // LIBRARIES

  // APPS
}
