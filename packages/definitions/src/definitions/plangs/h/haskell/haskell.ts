import type { PlangsGraph } from "@plangs/plangs";

export function define(g: PlangsGraph) {
  g.nodes.pl
    .set("pl+haskell", {
      name: "Haskell",
      description:
        "Haskell is a general-purpose, statically-typed, purely functional programming language with type inference and lazy evaluation. Designed for teaching, research, and industrial applications, Haskell has pioneered several programming language features such as type classes and monadic input/output (IO). It is named after logician Haskell Curry. Haskell's main implementation is the Glasgow Haskell Compiler (GHC).",
      keywords: ["glascow haskell compiler", "haskell", "purely functional"],
      websites: [
        { title: "Haskell Language", href: "http://haskell.org/", kind: "homepage" },
        { title: "Haskell - Wikipedia", href: "https://en.wikipedia.org/wiki/Haskell_(programming_language)", kind: "wikipedia" },
      ],
      extensions: [".hs", ".lhs"],
      year: 1990,
      isMainstream: true,
      stackovTags: ["haskell"],
      githubName: "Haskell",
      languishRanking: 44,
      githubLangId: "157",
      githubColor: "#5e5086",
      githubPopular: false,
      githubType: "programming",
      releases: [
        { version: "1.0", name: "Haskell 1.0", date: "1990" },
        { version: "98", name: "Haskell 98", date: "1999-02" },
        { version: "2010", name: "Haskell 2010", date: "2010-07" },
      ],
    })
    .addImplements(["pl+curry"])
    .addInfluencedBy(["pl+clean", "pl+fp", "pl+lisp", "pl+ml", "pl+r5rs", "pl+raku", "pl+scheme", "pl+standard-ml"])
    .addLicenses(["license+bsd"])
    .addParadigms(["paradigm+concurrent", "paradigm+declarative", "paradigm+functional", "paradigm+lazy"])
    .addPlatforms(["plat+bsd", "plat+cross", "plat+linux", "plat+windows"])
    .addTags(["tag+app", "tag+compiler", "tag+framework", "tag+industrial", "tag+interpreter"])
    .addTypeSystems(["tsys+inferred", "tsys+static", "tsys+strong"])
    .addApps(["app+aider", "app+zulip"]);

  // TOOLS

  // TOOL BUNDLES

  // LIBRARIES

  // APPS
}
