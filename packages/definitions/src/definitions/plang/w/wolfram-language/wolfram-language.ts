import type { PlangsGraph } from "@plangs/plangs/graph";

export function define(g: PlangsGraph) {
  g.plang
    .set("pl+wolfram-language", {
      name: "Wolfram Language",
      description:
        "The Wolfram Language is a proprietary, general-purpose, high-level multi-paradigm programming language developed by Wolfram Research. It is known for its symbolic computation capabilities, and emphasizes functional programming and rule-based programming. It serves as the programming language of Mathematica.",
      keywords: ["mathematica", "symbolic computation", "wolfram", "wolfram language"],
      extensions: [".m", ".nb", ".wl"],
      releases: [{ version: "14.1.0", name: "Wolfram Language 14.1.0", date: "2024-07-31" }],
      stackovTags: ["wolfram-mathematica"],
      githubName: "Mathematica",
      githubLangId: "224",
      githubColor: "#dd1100",
      githubPopular: false,
      githubType: "programming",
      extWikipediaPath: "Wolfram_Mathematica",
      extRedditPath: "Mathematica",
      extHomeURL: "https://www.wolfram.com/language/",
      created: "1988",
      isTranspiler: false,
      shortDesc:
        "The Wolfram Language is a high-level, multi-paradigm language used in Mathematica, known for symbolic computation and functional programming.",
    })
    .relInfluencedBy.add("pl+apl", "pl+c", "pl+c++", "pl+fortran", "pl+lisp", "pl+pascal", "pl+prolog")
    .relLicenses.add("lic+proprietary")
    .relParadigms.add("para+array", "para+functional", "para+multi", "para+procedural", "para+rewriting")
    .relPlatforms.add("plat+cross")
    .relTags.add("tag+audio-dev", "tag+cas", "tag+cli", "tag+games", "tag+interpreters", "tag+numeric", "tag+shell")
    .relTypeSystems.add("tsys+dynamic", "tsys+strong");

  // TOOLS

  // TOOL BUNDLES

  // LIBRARIES

  // APPS
}
