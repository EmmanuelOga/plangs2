import type { PlangsGraph } from "@plangs/plangs";

export function define(g: PlangsGraph) {
  g.nodes.pl
    .set("pl+scratchjr", {
      name: "ScratchJr",
      description:
        "ScratchJr is a visual programming language designed to introduce programming skills to children ages 5–7. The app is considered an introductory programming language. It is available as a free app for iOS, Android and Chromebook.",
      keywords: ["scratchjr", "visual programming", "children's programming language"],
      websites: [
        { title: "ScratchJr", href: "http://www.scratchjr.org/", kind: "homepage" },
        { title: "ScratchJr", href: "https://en.wikipedia.org/wiki/ScratchJr", kind: "wikipedia" },
      ],
      firstAppeared: "2014-01-01",
      isTranspiler: false,
      isMainstream: false,
    })
    .addInfluencedBy(["pl+scratch"])
    .addParadigms(["paradigm+educational", "paradigm+event-driven", "paradigm+visual"])
    .addPlatforms(["plat+android", "plat+apple"])
    .addTags(["tag+edu", "tag+interpreter", "tag+low-code"])
    .addTypeSystems(["tsys+untyped"]);
}
