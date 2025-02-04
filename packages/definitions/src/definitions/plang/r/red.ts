import type { PlangsGraph } from "@plangs/plangs/graph";

export function define(g: PlangsGraph) {
  g.plang
    .set("pl+red", {
      name: "Red",
      description:
        "Multifunctional programming language designed to address the limitations of Rebol, with features supporting both imperative and functional programming. Introduced in 2011 by Nenad Rakočević, Red caters to symbolic computations and system-level programming through its high-level and low-level syntactical elements.",
      shortDesc:
        "Programming language supporting imperative and functional paradigms, developed to overcome Rebol's limitations.",
      created: "2011",
      extensions: [".red", ".reds"],
      extGithubPath: "red/red",
      extHomeURL: "https://www.red-lang.org/",
      extRedditPath: "redlang",
      extWikipediaPath: "Red_(programming_language)",
      githubColor: "#f50000",
      githubLangId: "320",
      githubName: "Red",
      githubPopular: false,
      githubStars: 5600,
      githubType: "programming",
      isTranspiler: false,
      keywords: ["dataflow", "flow", "rebol", "red", "shader", "symbolic"],
      languishRanking: 321,
      releases: [{ version: "0.6.5", name: "Red 0.6.5", date: "2024-02-19" }],
      stackovTags: ["red"],
    })
    .relInfluencedBy.add("pl+lisp", "pl+lua", "pl+rebol")
    .relLicenses.add("lic+boost", "lic+bsd")
    .relParadigms.add(
      "para+functional",
      "para+general-purpose",
      "para+imperative",
      "para+multi",
      "para+symbolic",
    )
    .relPlatforms.add("plat+apple", "plat+linux", "plat+windows")
    .relTags.add(
      "tag+app",
      "tag+asm",
      "tag+dataflow",
      "tag+flow",
      "tag+gui",
      "tag+interpreters",
    )
    .relTypeSystems.add("tsys+dynamic", "tsys+weak")
    .relWrittenWith.add("pl+c", "pl+rebol");
}
