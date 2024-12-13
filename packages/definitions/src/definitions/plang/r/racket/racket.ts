import type { PlangsGraph } from "@plangs/plangs/graph";

export function define(g: PlangsGraph) {
  g.plang
    .set("pl+racket", {
      name: "Racket",
      description:
        "Racket is a general-purpose, multi-paradigm programming language derived from Lisp and Scheme, renowned for its robust macro system and extensive libraries for domain-specific language development and scripting.",
      keywords: ["lisp", "racket", "scheme"],
      extensions: [".rkt"],
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
      created: "1995",
      filenames: ["Racket"],
      isTranspiler: false,
      shortDesc: "Racket is a multi-paradigm language derived from Lisp and Scheme, known for powerful macros and libraries.",
      githubStars: 4800,
      extGithubPath: "racket/racket",
    })
    .relDialectOf.add("pl+lisp", "pl+scheme")
    .relInfluencedBy.add("pl+eiffel", "pl+lisp", "pl+r5rs", "pl+scheme")
    .relLicenses.add("lic+apache", "lic+mit")
    .relParadigms.add(
      "para+functional",
      "para+imperative",
      "para+logic",
      "para+metaprogramming",
      "para+modular",
      "para+multi",
      "para+oop",
      "para+reflective",
    )
    .relPlatforms.add("plat+arm", "plat+cross", "plat+x86-64")
    .relTags.add(
      "tag+analysis",
      "tag+app",
      "tag+compiler",
      "tag+dbms",
      "tag+editor",
      "tag+framework",
      "tag+games",
      "tag+gui",
      "tag+industrial",
      "tag+interpreters",
      "tag+scripting",
      "tag+shell",
      "tag+testing",
    )
    .relTypeSystems.add("tsys+dynamic", "tsys+static", "tsys+strong");

  // TOOLS

  // TOOL BUNDLES

  // LIBRARIES

  // APPS
}
