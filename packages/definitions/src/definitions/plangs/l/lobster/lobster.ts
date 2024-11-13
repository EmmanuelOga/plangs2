import type { PlangsGraph } from "@plangs/plangs";

export function define(g: PlangsGraph) {
  g.nodes.pl
    .set("pl+lobster", {
      name: "Lobster",
      description:
        "Lobster is a statically typed programming language with a Python-esque syntax that combines the advantages of an expressive type system and compile-time memory management with a very lightweight, friendly and terse syntax, by doing most of the heavy lifting for you. It is especially oriented towards game development, offering features tailored for graphical applications.",
      keywords: ["game development", "lobster", "programming language", "static typing"],
      websites: [
        { title: "The Lobster Programming Language — Wouter van Oortmerssen", href: "https://strlen.com/lobster/", kind: "homepage" },
        { title: "aardappel/lobster: The Lobster Programming Language", href: "https://github.com/aardappel/lobster", kind: "repository" },
      ],
      extensions: [".lobster"],
      year: 2016,
      releases: [{ version: "1.0", name: "Initial Release", date: "2016-01-01" }],
      isMainstream: false,
    })
    .addInfluencedBy(["pl+cpp", "pl+python"])
    .addLicenses(["license+apache", "license+zlib"])
    .addParadigms(["paradigm+compiled", "paradigm+functional", "paradigm+multi", "paradigm+oop"])
    .addPlatforms(["plat+cross", "plat+linux", "plat+web", "plat+windows"])
    .addTags(["tag+games", "tag+real-time", "tag+scripting"])
    .addTypeSystems(["tsys+inferred", "tsys+static", "tsys+strong"])
    .addWrittenIn(["pl+c++"]);

  // TOOLS

  // TOOL BUNDLES

  // LIBRARIES

  // APPS
}
