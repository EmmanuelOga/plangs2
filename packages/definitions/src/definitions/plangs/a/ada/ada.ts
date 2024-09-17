import type { PlangsGraph } from "@plangs/plangs";

export function define(g: PlangsGraph) {
  g.nodes.pl
    .set("pl+ada", {
      name: "Ada",
      description:
        "Ada is a structured, statically typed, imperative, and object-oriented high-level programming language, inspired by Pascal and other languages. It has built-in language support for design by contract (DbC), extremely strong typing, explicit concurrency, tasks, synchronous message passing, protected objects, and non-determinism. Ada improves code safety and maintainability by using the compiler to find errors in favor of runtime errors. Ada is an international technical standard, jointly defined by the International Organization for Standardization (ISO), and the International Electrotechnical Commission (IEC). As of May 2023, the standard, called Ada 2022 informally, is ISO/IEC 8652:2023.",
      firstAppeared: "1980-01-01",
      extensions: [".adb", ".ads"],
      websites: [
        { href: "https://www.adaic.org/", title: "www.adaic.org", kind: "homepage" },
        { href: "https://en.wikipedia.org/wiki/Ada_programming_language", title: "Ada", kind: "wikipedia" },
      ],
      images: [{ kind: "logo", title: "Ada", url: "/images/plangs/a/ada/logo.png" }],
    })
    .addDialectOf(["pl+pascal"])
    .addInfluencedBy(["pl+c++", "pl+clu", "pl+eiffel", "pl+pascal"])
    .addParadigms([
      "paradigm+array",
      "paradigm+aspect",
      "paradigm+concurrent",
      "paradigm+distributed",
      "paradigm+imperative",
      "paradigm+metaprogramming",
      "paradigm+multi",
      "paradigm+oop",
      "paradigm+procedural",
      "paradigm+structured",
    ])
    .addPlatforms(["plat+cross"])
    .addTags([
      "tag+app",
      "tag+compiler",
      "tag+dbms",
      "tag+embedded",
      "tag+if",
      "tag+industrial",
      "tag+interpreter",
      "tag+ray-tracer",
      "tag+testing",
      "tag+viz",
    ])
    .addTypeSystems(["tsys+nominal", "tsys+safe", "tsys+static", "tsys+strong"]);
}
