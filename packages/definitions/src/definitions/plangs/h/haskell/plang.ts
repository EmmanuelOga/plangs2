import type { PlangsGraph } from "@plangs/plangs";

export function define(g: PlangsGraph) {
  g.n_plang
    .set("pl+haskell", {
      name: "Haskell",
      description:
        "Haskell (/ˈhæskəl/) is a general-purpose, statically-typed, purely functional programming language with type inference and lazy evaluation. Designed for teaching, research, and industrial applications, Haskell has pioneered a number of programming language features such as type classes, which enable type-safe operator overloading, and monadic input/output (IO). It is named after logician Haskell Curry. Haskell's main implementation is the Glasgow Haskell Compiler (GHC).",
      firstAppeared: "1990-01-01",
      extensions: [".hs", ".lhs"],
      websites: [
        { href: "http://haskell.org/", title: "haskell.org", kind: "homepage" },
        { href: "https://en.wikipedia.org/wiki/Haskell_(programming_language)", title: "Haskell", kind: "wikipedia" },
      ],
    })
    .addImplements(["pl+curry"])
    .addInfluencedBy(["pl+clean", "pl+fp", "pl+lisp", "pl+ml", "pl+r5rs", "pl+raku", "pl+scheme", "pl+standard-ml"])
    .addParadigms(["para+functional"])
    .addPlatforms(["platf+cross"])
    .addTypeSystems(["tsys+inferred", "tsys+static", "tsys+strong"]);
}
