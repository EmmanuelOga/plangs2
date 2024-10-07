import type { PlangsGraph } from "@plangs/plangs";

export function define(g: PlangsGraph) {
  g.nodes.pl
    .set("pl+scratchjr", {
      name: "ScratchJr",
      description:
        "ScratchJr is a visual programming language designed to introduce programming skills to children ages 5–7. The app is considered an introductory programming language. It is available as a free app for iOS, Android and Chromebook.",
      firstAppeared: "2014-01-01",
      websites: [
        { href: "http://www.scratchjr.org/", title: "www.scratchjr.org", kind: "homepage" },
        { href: "https://en.wikipedia.org/wiki/ScratchJr", title: "ScratchJr", kind: "wikipedia" },
      ],
    })
    .addInfluencedBy(["pl+scratch"])
    .addPlatforms(["plat+android", "plat+apple"])
    .addTags(["tag+editor", "tag+interpreter", "tag+modeling", "tag+wavelet"]);
}
