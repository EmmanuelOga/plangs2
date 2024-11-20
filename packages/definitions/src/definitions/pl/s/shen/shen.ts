import type { PlangsGraph } from "@plangs/plangs";

export function define(g: PlangsGraph) {
  g.nodes.pl
    .set("pl+shen", {
      name: "Shen",
      description:
        "Shen is a functional programming language that combines logic programming, lambda calculus, and pattern matching into a powerful language for AI and other complex application domains.",
      keywords: ["functional", "lambda calculus", "logic programming", "shen"],
      extensions: [".shen"],
      year: 2011,
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
    })
    .addInfluencedBy(["pl+prolog", "pl+scheme"])
    .addLicenses(["license+bsd"])
    .addParadigms(["paradigm+functional", "paradigm+logic", "paradigm+multi", "paradigm+pattern-matching", "paradigm+symbolic"])
    .addPlatforms(["plat+apple", "plat+cross", "plat+java", "plat+linux", "plat+web", "plat+windows"])
    .addTags(["tag+automation", "tag+cas", "tag+compiler", "tag+interpreters", "tag+scripting"])
    .addTypeSystems(["tsys+manifest", "tsys+polymorphic", "tsys+static", "tsys+strong"])
    .addWrittenIn(["pl+scheme"]);

  // TOOLS

  // TOOL BUNDLES

  // LIBRARIES

  // APPS
}
