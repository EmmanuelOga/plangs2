import type { PlangsGraph } from "@plangs/plangs";

export function define(g: PlangsGraph) {
  g.nodes.pl
    .set("pl+scratchjr", {
      name: "ScratchJr",
      description:
        "ScratchJr is a visual programming language designed to introduce programming skills to children ages 5–7. The app is considered an introductory programming language. It is available as a free app for iOS, Android and Chromebook.",
      keywords: ["children's programming language", "scratchjr", "visual programming"],
      year: 2014,
      isMainstream: false,
      extWikipediaPath: "ScratchJr",
      extHomeURL: "http://www.scratchjr.org/",
    })
    .addInfluencedBy(["pl+scratch"])
    .addParadigms(["paradigm+educational", "paradigm+event-driven", "paradigm+visual"])
    .addPlatforms(["plat+android", "plat+apple"])
    .addTags(["tag+edu", "tag+interpreter", "tag+low-code"])
    .addTypeSystems(["tsys+untyped"]);

  // TOOLS

  // TOOL BUNDLES

  // LIBRARIES

  // APPS
}
