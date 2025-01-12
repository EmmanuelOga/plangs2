import type { PlangsGraph } from "@plangs/plangs/graph";

export function define(g: PlangsGraph) {
  g.plang
    .set("pl+racket", {
      name: "Racket",
      description:
        "General-purpose, multi-paradigm programming language derived from Lisp and Scheme, renowned for its robust macro system and extensive libraries for domain-specific language development and scripting.",
      shortDesc:
        "Multi-paradigm language derived from Lisp and Scheme, known for powerful macros and libraries.",
      created: "1995",
      extensions: [".rkt"],
      extGithubPath: "racket/racket",
      extHomeURL: "https://racket-lang.org/",
      extRedditPath: "Racket",
      extWikipediaPath: "Racket_(programming_language)",
      filenames: ["Racket"],
      githubColor: "#3c5caa",
      githubLangId: "316",
      githubName: "Racket",
      githubPopular: false,
      githubStars: 4800,
      githubType: "programming",
      isTranspiler: false,
      keywords: ["lisp", "racket", "scheme"],
      languishRanking: 151,
      releases: [
        { version: "8.15", name: "Racket 8.15", date: "2024-11-05" },
        { version: "8.14", name: "Racket 8.14", date: "2024-01-01" },
      ],
      stackovTags: ["racket"],
    })
    .relDialectOf.add("pl+lisp", "pl+scheme")
    .relImplements.add("pl+scheme")
    .relInfluencedBy.add("pl+eiffel", "pl+lisp", "pl+r5rs", "pl+scheme")
    .relLicenses.add("lic+apache", "lic+mit")
    .relParadigms.add(
      "para+functional",
      "para+general-purpose",
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
    .relTypeSystems.add(
      "tsys+dynamic",
      "tsys+object",
      "tsys+static",
      "tsys+strong",
    );
}
