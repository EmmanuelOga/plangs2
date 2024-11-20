import type { PlangsGraph } from "@plangs/plangs";

export function define(g: PlangsGraph) {
  g.nodes.pl
    .set("pl+amber", {
      name: "Amber",
      description:
        "Amber is a programming language compiled into Bash. It was designed with a modern syntax, safety features, type safety and practical functionalities that Bash could not offer, allowing enhanced runtime and type safety for writing scripts.",
      keywords: ["amber"],
      extensions: [".amber"],
      isTranspiler: true,
      releases: [{ version: "0.3.5.alpha", date: "2024-09-04" }],
      extHomeURL: "https://amber-lang.com",
      created: "2015",
    })
    .addCompilesTo(["pl+bash"])
    .addLicenses(["license+mit"])
    .addParadigms(["paradigm+compiled", "paradigm+multi", "paradigm+oop", "paradigm+scripting"])
    .addPlatforms(["plat+apple", "plat+linux", "plat+web"])
    .addTags(["tag+cli", "tag+scripting"])
    .addTypeSystems(["tsys+dynamic", "tsys+safe", "tsys+static"])
    .addWrittenIn(["pl+rust"]);

  // TOOLS

  // TOOL BUNDLES

  // LIBRARIES

  // APPS
}
