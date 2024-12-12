import type { PlangsGraph } from "@plangs/plangs/graph";

export function define(g: PlangsGraph) {
  g.plang
    .set("pl+shen", {
      name: "Shen",
      description:
        "Shen is a high-level, multi-paradigm language that combines elements of Lisp-like functional programming with pattern-matching and logic programming, targeted primarily for functional programming and symbolic computation.",
      keywords: ["functional", "lambda", "pattern-matching", "shen", "symbolic"],
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
      extHomeURL: "https://shenlanguage.org",
      created: "2011",
      isTranspiler: true,
      shortDesc: "Shen is a multi-paradigm language blending functional and logic programming for symbolic computation.",
      githubStars: 360,
      extGithubPath: "Shen-Language/shen-sources",
      ghRepoCreated: "2014-06-02",
    })
    .relInfluencedBy.add("pl+prolog", "pl+scheme")
    .relLicenses.add("lic+bsd")
    .relParadigms.add("para+functional", "para+logic", "para+multi", "para+pattern-matching", "para+symbolic")
    .relPlatforms.add("plat+apple", "plat+cross", "plat+java", "plat+linux", "plat+web", "plat+windows")
    .relTags.add("tag+automation", "tag+cas", "tag+compiler", "tag+interpreters", "tag+scripting")
    .relTypeSystems.add("tsys+manifest", "tsys+polymorphic", "tsys+static", "tsys+strong")
    .relWrittenWith.add("pl+common-lisp", "pl+scheme");

  // TOOLS

  // TOOL BUNDLES

  // LIBRARIES

  // APPS
}
