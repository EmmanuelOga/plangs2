import type { PlangsGraph } from "@plangs/plangs/graph";

export function define(g: PlangsGraph) {
  g.plang
    .set("pl+jq", {
      name: "jq",
      description:
        "Lightweight and flexible command-line JSON processor, allowing for easy manipulation and transformation of JSON data with a functional programming paradigm.",
      shortDesc: "Lightweight and flexible command-line JSON processor.",
      created: "2012",
      extensions: [".jq"],
      extGithubPath: "jqlang/jq",
      extHomeURL: "https://jqlang.github.io/jq/",
      extWikipediaPath: "Jq_(programming_language)",
      githubColor: "#c7254e",
      githubLangId: "905371884",
      githubName: "jq",
      githubPopular: false,
      githubStars: 30700,
      githubType: "programming",
      isTranspiler: false,
      keywords: ["jq"],
      languishRanking: 102,
      releases: [{ version: "1.7.1", date: "2023-12-13" }],
      stackovTags: ["jq"],
    })
    .relInfluencedBy.add("pl+haskell")
    .relLicenses.add("lic+mit", "lic+public-domain")
    .relParadigms.add(
      "para+functional",
      "para+point-free",
      "para+query",
      "para+scripting",
    )
    .relPlatforms.add("plat+bsd", "plat+cross", "plat+linux", "plat+windows")
    .relTags.add("tag+cli", "tag+interpreters", "tag+shell", "tag+workflow")
    .relTypeSystems.add("tsys+strong")
    .relWrittenWith.add("pl+c");
}
