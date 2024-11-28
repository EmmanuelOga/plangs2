import type { PlangsGraph } from "@plangs/plangs/graph";

export function define(g: PlangsGraph) {
  g.plang
    .set("pl+red", {
      name: "Red",
      description:
        "Red is a programming language designed to overcome the limitations of the programming language Rebol. Red was introduced in 2011 by Nenad Rakočević, and is both an imperative and functional programming language. Its syntax and general usage overlap that of the interpreted Rebol language.",
      keywords: ["functional", "imperative", "language", "programming", "rebol", "symbolic"],
      extensions: [".red", ".reds"],
      releases: [{ version: "0.6.5", name: "Red 0.6.5", date: "2024-02-19" }],
      stackovTags: ["red"],
      githubName: "Red",
      languishRanking: 340,
      githubLangId: "320",
      githubColor: "#f50000",
      githubPopular: false,
      githubType: "programming",
      extWikipediaPath: "Red_(programming_language)",
      extRedditPath: "redlang",
      extHomeURL: "https://www.red-lang.org/",
      created: "2011",
    })
    .relInfluencedBy.add("pl+lisp", "pl+lua", "pl+rebol")
    .relLicenses.add("lic+boost", "lic+bsd")
    .relParadigms.add("para+functional", "para+imperative", "para+multi", "para+symbolic")
    .relPlatforms.add("plat+apple", "plat+linux", "plat+windows")
    .relTags.add("tag+app", "tag+asm", "tag+dataflow", "tag+flow", "tag+interpreters", "tag+ui")
    .relTypeSystems.add("tsys+dynamic", "tsys+weak")
    .relWrittenWith.add("pl+c", "pl+rebol");

  // TOOLS

  // TOOL BUNDLES

  // LIBRARIES

  // APPS
}
