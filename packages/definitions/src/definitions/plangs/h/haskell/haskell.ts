import type { PlangsGraph } from "@plangs/plangs";

export function define(g: PlangsGraph) {
  g.nodes.pl
    .set("pl+haskell", {
      name: "Haskell",
      description:
        "Haskell (/ˈhæskəl/) is a general-purpose, statically-typed, purely functional programming language with type inference and lazy evaluation. Designed for teaching, research, and industrial applications, Haskell has pioneered a number of programming language features such as type classes, which enable type-safe operator overloading, and monadic input/output (IO). It is named after logician Haskell Curry. Haskell's main implementation is the Glasgow Haskell Compiler (GHC).",
      keywords: ["haskell"],
      websites: [
        { title: "haskell.org", href: "http://haskell.org/", kind: "homepage" },
        { title: "Haskell", href: "https://en.wikipedia.org/wiki/Haskell_(programming_language)", kind: "wikipedia" },
      ],
      extensions: [".hs", ".lhs"],
      year: 1990,
      isTranspiler: false,
      isMainstream: true,
    })
    .addImplements(["pl+curry"])
    .addInfluencedBy(["pl+clean", "pl+fp", "pl+lisp", "pl+ml", "pl+r5rs", "pl+raku", "pl+scheme", "pl+standard-ml"])
    .addLicenses(["license+bsd"])
    .addParadigms(["paradigm+declarative", "paradigm+functional", "paradigm+lazy"])
    .addPlatforms(["plat+bsd", "plat+cross", "plat+linux", "plat+windows"])
    .addTags(["tag+app", "tag+compiler", "tag+framework", "tag+industrial", "tag+interpreter"])
    .addTypeSystems(["tsys+inferred", "tsys+static", "tsys+strong"]);

  // TOOLS

  // TOOL BUNDLES

  // LIBRARIES

  // APPS
}
