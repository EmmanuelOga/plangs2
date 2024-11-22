import type { PlangsGraph } from "@plangs/plangs";

export function define(g: PlangsGraph) {
  g.nodes.pl
    .set("pl+gravity", {
      name: "Gravity",
      description:
        "Gravity is a powerful, dynamically typed, lightweight, embeddable programming language written in C without any external dependencies. It supports procedural, object-oriented, functional, and data-driven programming paradigms and is designed for the Creo project.",
      keywords: ["Creo", "gravity", "programming language", "swift-like syntax"],
      extensions: [".gravity"],
      releases: [{ version: "0.8", name: "Gravity 0.8", date: "2023-01-01" }],
      isTranspiler: true,
      extGithubPath: "marcobambini/gravity",
      created: "2015",
    })
    .relInfluencedBy.add(["pl+lua", "pl+swift"])
    .relLicenses.add(["license+mit"])
    .relParadigms.add(["paradigm+functional", "paradigm+multi", "paradigm+oop", "paradigm+procedural", "paradigm+scripting"])
    .relPlatforms.add(["plat+android", "plat+cross"])
    .relTags.add(["tag+embedded", "tag+games", "tag+scripting"])
    .relTsys.add(["tsys+dynamic", "tsys+strong"])
    .relWrittenIn.add(["pl+c"]);

  // TOOLS

  // TOOL BUNDLES

  // LIBRARIES

  // APPS
}
