import type { PlangsGraph } from "@plangs/plangs/graph";

export function define(g: PlangsGraph) {
  g.plang
    .set("pl+flix", {
      name: "Flix",
      description:
        "Flix is a functional, imperative, and logic programming language developed at Aarhus University, with funding from the Independent Research Fund Denmark, and by a community of open source contributors. The Flix language supports algebraic data types, pattern matching, parametric polymorphism, currying, higher-order functions, extensible records, channel and process-based concurrency, and tail call elimination. Two notable features of Flix are its type and effect system and its support for first-class Datalog constraints.",
      keywords: ["flix"],
      extensions: [".flix"],
      releases: [
        { version: "0.1", name: "Flix 0.1", date: "2014-01-01" },
        { version: "0.6.0", name: "Flix 0.6.0", date: "2021-06-03" },
      ],
      extWikipediaPath: "Flix_(programming_language)",
      extHomeURL: "https://flix.dev/",
      created: "2015",
    })
    .relInfluence.add(["pl+f-sharp", "pl+go", "pl+haskell", "pl+ocaml", "pl+scala"])
    .relLicense.add(["lic+apache"])
    .relParadigm.add(["para+functional", "para+imperative", "para+logic", "para+multi"])
    .relPlatform.add(["plat+cross", "plat+java"])
    .relTag.add(["tag+compiler", "tag+interpreters"])
    .relTypeSystem.add(["tsys+inferred", "tsys+static", "tsys+strong", "tsys+structural"])
    .relWrittenInPlang.add(["pl+java"]);

  // TOOLS

  // TOOL BUNDLES

  // LIBRARIES

  // APPS
}
