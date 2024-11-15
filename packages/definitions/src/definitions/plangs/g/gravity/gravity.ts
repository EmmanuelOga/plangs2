import type { PlangsGraph } from "@plangs/plangs";

export function define(g: PlangsGraph) {
  g.nodes.pl
    .set("pl+gravity", {
      name: "Gravity",
      description:
        "Gravity is a powerful, dynamically typed, lightweight, embeddable programming language written in C without any external dependencies. It supports procedural, object-oriented, functional, and data-driven programming paradigms and is designed for the Creo project.",
      keywords: ["Creo", "gravity", "programming language", "swift-like syntax"],
      extensions: [".gravity"],
      year: 2015,
      releases: [{ version: "0.8", name: "Gravity 0.8", date: "2023-01-01" }],
      isTranspiler: true,
      isMainstream: false,
      extGithubPath: "marcobambini/gravity",
    })
    .addInfluencedBy(["pl+lua", "pl+swift"])
    .addLicenses(["license+mit"])
    .addParadigms(["paradigm+functional", "paradigm+multi", "paradigm+oop", "paradigm+procedural", "paradigm+scripting"])
    .addPlatforms(["plat+android", "plat+cross"])
    .addTags(["tag+embedded", "tag+games", "tag+scripting"])
    .addTypeSystems(["tsys+dynamic", "tsys+strong"])
    .addWrittenIn(["pl+c"]);

  // TOOLS

  // TOOL BUNDLES

  // LIBRARIES

  // APPS
}
