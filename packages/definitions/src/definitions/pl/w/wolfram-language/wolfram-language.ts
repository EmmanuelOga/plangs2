import type { PlangsGraph } from "@plangs/plangs";

export function define(g: PlangsGraph) {
  g.nodes.pl
    .set("pl+wolfram-language", {
      name: "Wolfram Language",
      description:
        "The Wolfram Language is a proprietary, general-purpose, high-level multi-paradigm programming language developed by Wolfram Research. It is known for its symbolic computation capabilities, and emphasizes functional programming and rule-based programming. It serves as the programming language of Mathematica.",
      keywords: ["mathematica", "programming language", "symbolic computation", "wolfram", "wolfram language"],
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
    })
    .addInfluencedBy(["pl+apl", "pl+c", "pl+c++", "pl+fortran", "pl+lisp", "pl+pascal", "pl+prolog"])
    .addParadigms(["paradigm+array", "paradigm+functional", "paradigm+multi", "paradigm+procedural", "paradigm+rewriting"])
    .addPlatforms(["plat+cross"])
    .addTags(["tag+audio-dev", "tag+cas", "tag+cli", "tag+games", "tag+interpreters", "tag+numeric", "tag+shell"])
    .addTypeSystems(["tsys+dynamic", "tsys+strong"]);

  // TOOLS

  // TOOL BUNDLES

  // LIBRARIES

  // APPS
}
