import type { PlangsGraph } from "@plangs/plangs";

export function define(g: PlangsGraph) {
  g.n_plang
    .set("pl+flix", {
      name: "Flix",
      description:
        "Flix is a functional, imperative, and logic programming language developed at Aarhus University, with funding from the Independent Research Fund Denmark, and by a community of open source contributors. The Flix language supports algebraic data types, pattern matching, parametric polymorphism, currying, higher-order functions, extensible records, channel and process-based concurrency, and tail call elimination. Two notable features of Flix are its type and effect system and its support for first-class Datalog constraints.",
      extensions: [".flix"],
      websites: [
        { href: "https://flix.dev/", title: "flix.dev", kind: "homepage" },
        { href: "https://en.wikipedia.org/wiki/Flix_(programming_language)", title: "Flix", kind: "wikipedia" },
      ],
    })
    .addInfluencedBy(["pl+f-sharp", "pl+go", "pl+haskell", "pl+ocaml", "pl+scala"])
    .addLicenses(["lic+apache"])
    .addParadigms(["para+functional", "para+imperative", "para+logic", "para+multi"])
    .addTypeSystems(["tsys+inferred", "tsys+static", "tsys+strong", "tsys+structural"]);
}
