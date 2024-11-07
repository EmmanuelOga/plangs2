import type { PlangsGraph } from "@plangs/plangs";

export function define(g: PlangsGraph) {
  g.nodes.pl
    .set("pl+amber", {
      name: "Amber",
      description:
        "Amber is a programming language compiled into Bash Script. It was designed with a modern syntax, safety features, type safety and practical functionalities that Bash could not offer. The subsequent section will demonstrate how Amber embodies these characteristics.",
      keywords: ["amber"],
      websites: [{ title: "Amber", href: "https://amber-lang.com", kind: "homepage" }],
      extensions: [".amber"],
      year: 2015,
      isTranspiler: true,
      releases: [{ version: "0.3.5.alpha", date: "2024-09-04" }],
    })
    .addCompilesTo(["pl+bash"])
    .addInfluencedBy(["pl+smalltalk"])
    .addLicenses(["license+mit"])
    .addParadigms(["paradigm+interpreter", "paradigm+multi", "paradigm+oop", "paradigm+scripting"])
    .addPlatforms(["plat+web"])
    .addTags(["tag+cli", "tag+scripting"])
    .addTypeSystems(["tsys+dynamic"])
    .addWrittenIn(["pl+rust"]);

  // TOOLS

  // TOOL BUNDLES

  // LIBRARIES

  // APPS
}
