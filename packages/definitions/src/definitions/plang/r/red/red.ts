import type { PlangsGraph } from "@plangs/plangs/graph";

export function define(g: PlangsGraph) {
  g.plang
    .set("pl+red", {
      name: "Red",
      description:
        "Red is a multifunctional programming language designed to address the limitations of Rebol, with features supporting both imperative and functional programming. Introduced in 2011 by Nenad Rakočević, Red caters to symbolic computations and system-level programming through its high-level and low-level syntactical elements.",
      keywords: ["dataflow", "flow", "rebol", "red", "shader", "symbolic"],
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
      isTranspiler: false,
      shortDesc: "Red is a programming language supporting imperative and functional paradigms, developed to overcome Rebol's limitations.",
      githubStars: 5600,
      extGithubPath: "red/red",
      ghRepoCreated: "2012-09-07",
    })
    .relInfluencedBy.add("pl+lisp", "pl+lua", "pl+rebol")
    .relLicenses.add("lic+boost", "lic+bsd")
    .relParadigms.add("para+functional", "para+imperative", "para+multi", "para+symbolic")
    .relPlatforms.add("plat+apple", "plat+linux", "plat+windows")
    .relTags.add("tag+app", "tag+asm", "tag+dataflow", "tag+flow", "tag+gui", "tag+interpreters")
    .relTypeSystems.add("tsys+dynamic", "tsys+weak")
    .relWrittenWith.add("pl+c", "pl+rebol");

  // TOOLS

  // TOOL BUNDLES

  // LIBRARIES

  // APPS
}
