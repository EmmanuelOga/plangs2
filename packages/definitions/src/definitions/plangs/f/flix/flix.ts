import type { PlangsGraph } from "@plangs/plangs";

export function define(g: PlangsGraph) {
  g.nodes.pl
    .set("pl+flix", {
      name: "Flix",
      description:
        "Flix is a functional, imperative, and logic programming language developed at Aarhus University, with funding from the Independent Research Fund Denmark, and by a community of open source contributors. The Flix language supports algebraic data types, pattern matching, parametric polymorphism, currying, higher-order functions, extensible records, channel and process-based concurrency, and tail call elimination. Two notable features of Flix are its type and effect system and its support for first-class Datalog constraints.",
      keywords: ["flix"],
      websites: [
        { title: "flix.dev", href: "https://flix.dev/", kind: "homepage" },
        { title: "Flix", href: "https://en.wikipedia.org/wiki/Flix_(programming_language)", kind: "wikipedia" },
      ],
      extensions: [".flix"],
      year: 2015,
      images: [
        { kind: "logo", title: "Flix logo", url: "https://raw.githubusercontent.com/flix/flix/master/docs/logo.png", width: 512, height: 512 },
      ],
      isTranspiler: false,
      isMainstream: false,
      releases: [
        { version: "0.1", name: "Flix 0.1", date: "2014-01-01" },
        { version: "0.6.0", name: "Flix 0.6.0", date: "2021-06-03" },
      ],
    })
    .addInfluencedBy(["pl+f-sharp", "pl+go", "pl+haskell", "pl+ocaml", "pl+scala"])
    .addLicenses(["license+apache"])
    .addParadigms(["paradigm+functional", "paradigm+imperative", "paradigm+logic", "paradigm+multi"])
    .addPlatforms(["plat+cross", "plat+java"])
    .addTags(["tag+compiler", "tag+interpreter"])
    .addTypeSystems(["tsys+inferred", "tsys+static", "tsys+strong", "tsys+structural"])
    .addWrittenIn(["pl+java"]);
}
