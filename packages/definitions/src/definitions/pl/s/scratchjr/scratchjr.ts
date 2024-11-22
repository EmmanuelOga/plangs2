import type { PlangsGraph } from "@plangs/plangs";

export function define(g: PlangsGraph) {
  g.nodes.pl
    .set("pl+scratchjr", {
      name: "ScratchJr",
      description:
        "ScratchJr is a visual programming language designed to introduce programming skills to children ages 5–7. The app is considered an introductory programming language. It is available as a free app for iOS, Android and Chromebook.",
      keywords: ["children's programming language", "scratchjr", "visual programming"],
      extWikipediaPath: "ScratchJr",
      extHomeURL: "http://www.scratchjr.org/",
      created: "2014",
    })
    .relInfluencedBy.add(["pl+scratch"])
    .relParadigms.add(["paradigm+educational", "paradigm+event-driven", "paradigm+visual"])
    .relPlatforms.add(["plat+android", "plat+apple"])
    .relTags.add(["tag+edu", "tag+interpreters", "tag+low-code"])
    .relTsys.add(["tsys+untyped"]);

  // TOOLS

  // TOOL BUNDLES

  // LIBRARIES

  // APPS
}
