import type { PlangsGraph } from "@plangs/plangs";

export function define(g: PlangsGraph) {
  g.nodes.pl
    .set("pl+crystal", {
      name: "Crystal",
      description:
        "Crystal is a high-level general-purpose, object-oriented programming language, designed and developed by Ary Borenszweig, Juan Wajnerman, Brian Cardiff and more than 400 contributors. With syntax inspired by the language Ruby, it is a compiled language with static type-checking, but specifying the types of variables or method arguments is generally unneeded. Types are resolved by an advanced global type inference algorithm. Crystal is currently in active development. It is released as free and open-source software under the Apache License version 2.0.",
      keywords: ["crystal"],
      websites: [
        { title: "Crystal", href: "https://crystal-lang.org/", kind: "homepage" },
        { title: "Crystal", href: "https://en.wikipedia.org/wiki/Crystal_(programming_language)", kind: "wikipedia" },
      ],
      extensions: [".cr"],
      year: 2014,
      isTranspiler: false,
      isMainstream: false,
      releases: [
        { version: "1.0.0", name: "Crystal 1.0.0", date: "2021-03-31" },
        { version: "1.13.2", name: "Crystal 1.13.2", date: "2024-01-01" },
      ],
    })
    .addInfluencedBy(["pl+c", "pl+c-sharp", "pl+go", "pl+python", "pl+ruby", "pl+rust"])
    .addLicenses(["license+apache"])
    .addParadigms(["paradigm+compiled", "paradigm+concurrent", "paradigm+multi", "paradigm+oop"])
    .addPlatforms(["plat+apple", "plat+arm", "plat+bsd", "plat+linux", "plat+windows", "plat+x86-64"])
    .addTags(["tag+compiler", "tag+interpreter", "tag+scripting"])
    .addTypeSystems(["tsys+duck", "tsys+inferred", "tsys+nominal", "tsys+static"])
    .addWrittenIn(["pl+c"]);

  // TOOLS

  // TOOL BUNDLES

  // LIBRARIES

  // APPS
}
