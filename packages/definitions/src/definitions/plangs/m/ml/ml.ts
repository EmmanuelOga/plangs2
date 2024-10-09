import type { PlangsGraph } from "@plangs/plangs";

export function define(g: PlangsGraph) {
  g.nodes.pl
    .set("pl+ml", {
      name: "ML",
      description:
        "ML (Meta Language) is a general-purpose, high-level, functional programming language. It is known for its use of the polymorphic Hindley–Milner type system, which automatically assigns the data types of most expressions without requiring explicit type annotations (type inference), and ensures type safety; there is a formal proof that a well-typed ML program does not cause runtime type errors. ML provides pattern matching for function arguments, garbage collection, imperative programming, call-by-value and currying. While a general-purpose programming language, ML is used heavily in programming language research and is one of the few languages to be completely specified and verified using formal semantics. Its types and pattern matching make it well-suited and commonly used to operate on other formal languages, such as in compiler writing, automated theorem proving, and formal verification.",
      keywords: ["ml", "meta language"],
      websites: [{ title: "ML", href: "https://en.wikipedia.org/wiki/ML_programming_language", kind: "wikipedia" }],
      firstAppeared: "1973-01-01",
      isTranspiler: false,
      isMainstream: false,
    })
    .addInfluencedBy(["pl+lisp"])
    .addParadigms(["paradigm+functional", "paradigm+imperative", "paradigm+multi"])
    .addTags(["tag+compiler", "tag+genomics", "tag+interpreter", "tag+modeling", "tag+proofs", "tag+wavelet"])
    .addTypeSystems(["tsys+inferred", "tsys+static", "tsys+strong"]);
}
