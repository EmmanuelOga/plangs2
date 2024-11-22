import type { PlangsGraph } from "@plangs/plangs";

export function define(g: PlangsGraph) {
  g.nodes.pl
    .set("pl+curry", {
      name: "Curry",
      description:
        "Curry is a declarative programming language that uniquely integrates features of functional and logic programming paradigms. It supports non-deterministic computations, constraint programming, and combines features such as lazy evaluation and strong typing. Curry is based on Haskell but extends it with logic programming features.",
      keywords: ["curry", "declarative", "functional", "logic", "programming"],
      extensions: [".curry"],
      releases: [{ version: "3.6.0", name: "Curry 3.6.0", date: "2023-11-10" }],
      githubName: "Curry",
      githubLangId: "439829048",
      githubColor: "#531242",
      githubPopular: false,
      githubType: "programming",
      extWikipediaPath: "Curry_(programming_language)",
      extHomeURL: "http://curry.pages.ps.informatik.uni-kiel.de/curry-lang.org",
      created: "1995",
    })
    .relInfluencedBy.add(["pl+haskell", "pl+prolog"])
    .relLicenses.add(["license+bsd"])
    .relParadigms.add([
      "paradigm+concurrent",
      "paradigm+constraint",
      "paradigm+declarative",
      "paradigm+functional",
      "paradigm+lazy",
      "paradigm+logic",
      "paradigm+modular",
    ])
    .relPlatforms.add(["plat+cross", "plat+linux", "plat+x86-64"])
    .relTags.add(["tag+audio-dev", "tag+compiler", "tag+interpreters", "tag+scripting", "tag+testing"])
    .relTsys.add(["tsys+inferred", "tsys+static", "tsys+strong"]);

  // TOOLS

  // TOOL BUNDLES

  // LIBRARIES

  // APPS
}
