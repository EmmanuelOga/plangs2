import type { PlangsGraph } from "@plangs/plangs/graph";

export function define(g: PlangsGraph) {
  g.plang
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
    .relInfluence.add(["pl+lua", "pl+swift"])
    .relLicense.add(["lic+mit"])
    .relParadigm.add(["para+functional", "para+multi", "para+oop", "para+procedural", "para+scripting"])
    .relPlatform.add(["plat+android", "plat+cross"])
    .relTag.add(["tag+embedded", "tag+games", "tag+scripting"])
    .relTypeSystem.add(["tsys+dynamic", "tsys+strong"])
    .relWrittenInPlang.add(["pl+c"]);

  // TOOLS

  // TOOL BUNDLES

  // LIBRARIES

  // APPS
}
