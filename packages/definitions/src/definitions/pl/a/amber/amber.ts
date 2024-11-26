import type { PlangsGraph } from "@plangs/plangs/graph";

export function define(g: PlangsGraph) {
  g.plang.    .set("pl+amber", {
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
    .relCompilesTo.add(["pl+bash"])
    .relLicense.add(["license+mit"])
    .relParadigm.add(["para+compiled", "para+multi", "para+oop", "para+scripting"])
    .relPlatforms.add(["plat+apple", "plat+linux", "plat+web"])
    .relTags.add(["tag+cli", "tag+scripting"])
    .relTsys.add(["tsys+dynamic", "tsys+safe", "tsys+static"])
    .relWrittenIn.add(["pl+rust"]);

  // TOOLS

  // TOOL BUNDLES

  // LIBRARIES

  // APPS
}
