import type { PlangsGraph } from "@plangs/plangs";

export function define(g: PlangsGraph) {
  g.nodes.pl
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
    .relInfluencedBy.add(["pl+lisp", "pl+lua", "pl+rebol"])
    .relLicenses.add(["license+boost", "license+bsd"])
    .relParadigms.add(["paradigm+functional", "paradigm+imperative", "paradigm+multi", "paradigm+symbolic"])
    .relPlatforms.add(["plat+apple", "plat+linux", "plat+windows"])
    .relTags.add(["tag+app", "tag+asm", "tag+dataflow", "tag+flow", "tag+interpreters", "tag+ui"])
    .relTsys.add(["tsys+dynamic", "tsys+weak"])
    .relWrittenIn.add(["pl+c", "pl+rebol"]);

  // TOOLS

  // TOOL BUNDLES

  // LIBRARIES

  // APPS
}
