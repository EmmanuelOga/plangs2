import type { PlangsGraph } from "@plangs/plangs";

export function define(g: PlangsGraph) {
  g.n_plang
    .set("pl+scratchjr", {
      images: [{ title: "ScratchJr", kind: "other", url: "/images/plangs/s/scratchjr/main.png" }],
      name: "ScratchJr",
      description:
        "ScratchJr is a visual programming language designed to introduce programming skills to children ages 5–7. The app is considered an introductory programming language. It is available as a free app for iOS, Android and Chromebook.",
      websites: [
        { href: "http://www.scratchjr.org/", title: "www.scratchjr.org", kind: "homepage" },
        { href: "https://en.wikipedia.org/wiki/ScratchJr", title: "ScratchJr", kind: "wikipedia" },
      ],
      extensions: [],
      releases: [],
    })
    .addInfluencedBy(["pl+scratch"])
    .addPlatforms(["platf+android", "platf+apple"]);
}
