import type { PlangsGraph } from "@plangs/plangs";

export function define(g: PlangsGraph) {
  g.nodes.pl
    .set("pl+racket", {
      name: "Racket",
      description:
        "Racket is a general-purpose, multi-paradigm programming language that descends from Lisp and Scheme. It is renowned for its powerful macro system and support for domain-specific language development. Racket is used in computer science education, research, and scripting, and is equipped with extensive libraries and tools for various applications.",
      keywords: ["racket"],
      extensions: [".rkt"],
      year: 1995,
      releases: [
        { version: "8.15", name: "Racket 8.15", date: "2024-11-05" },
        { version: "8.14", name: "Racket 8.14", date: "2024-01-01" },
      ],
      stackovTags: ["racket"],
      githubName: "Racket",
      languishRanking: 151,
      githubLangId: "316",
      githubColor: "#3c5caa",
      githubPopular: false,
      githubType: "programming",
      extWikipediaPath: "Racket_(programming_language)",
      extRedditPath: "Racket",
      extHomeURL: "https://racket-lang.org/",
    })
    .addDialectOf(["pl+lisp"])
    .addInfluencedBy(["pl+eiffel", "pl+r5rs", "pl+scheme"])
    .addLicenses(["license+apache", "license+mit"])
    .addParadigms([
      "paradigm+functional",
      "paradigm+imperative",
      "paradigm+logic",
      "paradigm+metaprogramming",
      "paradigm+modular",
      "paradigm+multi",
      "paradigm+oop",
      "paradigm+reflective",
    ])
    .addPlatforms(["plat+arm", "plat+cross", "plat+x86-64"])
    .addTags([
      "tag+analysis",
      "tag+app",
      "tag+compiler",
      "tag+dbms",
      "tag+editor",
      "tag+framework",
      "tag+games",
      "tag+industrial",
      "tag+interpreters",
      "tag+scripting",
      "tag+shell",
      "tag+testing",
      "tag+ui",
    ])
    .addTypeSystems(["tsys+dynamic", "tsys+static", "tsys+strong"]);

  // TOOLS

  // TOOL BUNDLES

  // LIBRARIES

  // APPS
}
