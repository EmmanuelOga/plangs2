import type { PlangsGraph } from "@plangs/plangs/graph";

export function define(g: PlangsGraph) {
  g.plang
    .set("pl+whiley", {
      name: "Whiley",
      description:
        "Whiley is an experimental programming language that combines features from the functional and imperative paradigms, and supports formal specification through function preconditions, postconditions, and loop invariants.",
      shortDesc: "Whiley supports functional and imperative paradigms and facilitates formal specification through contracts.",
      created: "2010",
      extensions: [".whiley"],
      extGithubPath: "Whiley/WhileyCompiler",
      extHomeURL: "http://whiley.org",
      extWikipediaPath: "Whiley_(programming_language)",
      githubColor: "#d5c397",
      githubLangId: "888779559",
      githubName: "Whiley",
      githubPopular: false,
      githubStars: 220,
      githubType: "programming",
      isTranspiler: false,
      keywords: ["whiley"],
      releases: [{ version: "0.6.1", name: "", date: "2022-06-27" }],
    })
    .relInfluencedBy.add("pl+c", "pl+python", "pl+rust")
    .relLicenses.add("lic+bsd")
    .relParadigms.add("para+functional", "para+imperative")
    .relPlatforms.add("plat+cross", "plat+java")
    .relTags.add("tag+compiler", "tag+interpreters", "tag+sci")
    .relTypeSystems.add("tsys+flow", "tsys+safe", "tsys+strong", "tsys+structural");

  // TOOLS

  // TOOL BUNDLES

  // LIBRARIES

  // APPS
}
