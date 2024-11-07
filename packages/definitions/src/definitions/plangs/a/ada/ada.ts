import type { PlangsGraph } from "@plangs/plangs";

export function define(g: PlangsGraph) {
  g.nodes.pl
    .set("pl+ada", {
      name: "Ada",
      description:
        "Ada is a structured, statically typed, imperative, and object-oriented high-level programming language, inspired by Pascal and other languages. It has built-in language support for design by contract (DbC), extremely strong typing, explicit concurrency, tasks, synchronous message passing, protected objects, and non-determinism. Ada improves code safety and maintainability by using the compiler to find errors in favor of runtime errors. Ada is an international technical standard, jointly defined by the International Organization for Standardization (ISO), and the International Electrotechnical Commission (IEC). As of May 2023, the standard, called Ada 2022 informally, is ISO/IEC 8652:2023.",
      year: 1980,
      extensions: [".adb", ".ads"],
      keywords: ["ada", "pascal", "object-oriented", "concurrency"],
      websites: [
        { title: "www.adaic.org", href: "https://www.adaic.org/", kind: "homepage" },
        { title: "Ada", href: "https://en.wikipedia.org/wiki/Ada_programming_language", kind: "wikipedia" },
      ],
      isTranspiler: false,
      isMainstream: true,
      releases: [{ version: "ISO/IEC 8652:2023", name: "Ada 2022", date: "2023-05-01" }],
    })
    .addDialectOf(["pl+pascal"])
    .addInfluencedBy(["pl+c++", "pl+clu", "pl+eiffel", "pl+pascal"])
    .addLicenses(["license+gnu-gpl"])
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
    .addTags(["tag+app", "tag+compiler", "tag+dbms", "tag+embedded", "tag+industrial", "tag+interpreter", "tag+ray-tracer", "tag+testing", "tag+viz"])
    .addTypeSystems(["tsys+nominal", "tsys+safe", "tsys+static", "tsys+strong"]);

  // TOOLS

  // TOOL BUNDLES

  // LIBRARIES

  // APPS
}
