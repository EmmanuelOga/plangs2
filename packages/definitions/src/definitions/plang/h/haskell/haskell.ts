import type { PlangsGraph } from "@plangs/plangs/graph";

export function define(g: PlangsGraph) {
  g.plang
    .set("pl+haskell", {
      name: "Haskell",
      description:
        "General-purpose, statically-typed, purely functional programming language with type inference and lazy evaluation. Designed for teaching, research, and industrial applications, Haskell has pioneered several programming language features such as type classes and monadic input/output (IO). It is named after logician Haskell Curry. Haskell's main implementation is the Glasgow Haskell Compiler (GHC).",
      shortDesc: "Statically-typed, purely functional language known for type inference and lazy evaluation.",
      created: "1990",
      extensions: [".hs", ".lhs"],
      extGithubPath: "ghc/ghc",
      extHomeURL: "http://haskell.org/",
      extRedditPath: "haskell",
      extWikipediaPath: "Haskell_(programming_language)",
      githubColor: "#5e5086",
      githubLangId: "157",
      githubName: "Haskell",
      githubPopular: false,
      githubStars: 3100,
      githubType: "programming",
      isTranspiler: false,
      keywords: ["glascow haskell compiler", "haskell", "purely functional"],
      languishRanking: 44,
      releases: [
        { version: "1.0", name: "Haskell 1.0", date: "1990" },
        { version: "98", name: "Haskell 98", date: "1999-02" },
        { version: "2010", name: "Haskell 2010", date: "2010-07" },
      ],
      stackovTags: ["haskell"],
    })
    .relImplements.add("pl+curry")
    .relInfluencedBy.add("pl+clean", "pl+lisp", "pl+r5rs", "pl+raku", "pl+scheme", "pl+standard-ml")
    .relLicenses.add("lic+bsd")
    .relParadigms.add("para+concurrent", "para+declarative", "para+functional", "para+lazy")
    .relPlatforms.add("plat+bsd", "plat+cross", "plat+linux", "plat+windows")
    .relTags.add("tag+app", "tag+compiler", "tag+framework", "tag+industrial", "tag+interpreters")
    .relTypeSystems.add("tsys+inferred", "tsys+static", "tsys+strong");

  // TOOLS

  // TOOL BUNDLES

  // LIBRARIES

  // APPS
}
