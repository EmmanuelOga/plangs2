import type { PlangsGraph } from "@plangs/plangs/graph";

export function define(g: PlangsGraph) {
  g.plang
    .set("pl+shen", {
      name: "Shen",
      description:
        "Shen is a functional programming language that combines logic programming, lambda calculus, and pattern matching into a powerful language for AI and other complex application domains.",
      keywords: ["functional", "lambda calculus", "logic programming", "shen"],
      extensions: [".shen"],
      releases: [{ version: "22.2", name: "Shen 22.2", date: "2023-08-01" }],
      stackovTags: ["shen"],
      githubName: "Shen",
      githubLangId: "348",
      githubColor: "#120F14",
      githubPopular: false,
      githubType: "programming",
      extRedditPath: "Qi_Shen|shenlanguage",
      extWikipediaPath: "Shen_(programming_language)",
      extHomeURL: "https://shenlanguage.org/",
      created: "2011",
    })
    .relInfluencedBy.add("pl+prolog", "pl+scheme")
    .relLicenses.add("lic+bsd")
    .relParadigms.add("para+functional", "para+logic", "para+multi", "para+pattern-matching", "para+symbolic")
    .relPlatforms.add("plat+apple", "plat+cross", "plat+java", "plat+linux", "plat+web", "plat+windows")
    .relTags.add("tag+automation", "tag+cas", "tag+compiler", "tag+interpreters", "tag+scripting")
    .relTypeSystems.add("tsys+manifest", "tsys+polymorphic", "tsys+static", "tsys+strong")
    .relWrittenWith.add("pl+scheme");

  // TOOLS

  // TOOL BUNDLES

  // LIBRARIES

  // APPS
}
