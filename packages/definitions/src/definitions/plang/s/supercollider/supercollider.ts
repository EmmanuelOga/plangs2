import type { PlangsGraph } from "@plangs/plangs/graph";

export function define(g: PlangsGraph) {
  g.plang
    .set("pl+supercollider", {
      name: "SuperCollider",
      description:
        "Used for real-time audio synthesis and algorithmic music composition, originally introduced by James McCartney in 1996. It plays a significant role in sound design and music technology.",
      shortDesc: "Real-time audio synthesis and music composition.",
      created: "1996",
      extensions: [".scd"],
      extGithubPath: "supercollider/supercollider",
      extHomeURL: "http://supercollider.github.io/",
      extRedditPath: "supercollider",
      extWikipediaPath: "SuperCollider",
      githubColor: "#46390b",
      githubLangId: "361",
      githubName: "SuperCollider",
      githubPopular: false,
      githubStars: 5600,
      githubType: "programming",
      isTranspiler: false,
      keywords: ["algorithmic", "audio", "sound", "supercollider", "synthesis"],
      languishRanking: 218,
      releases: [{ version: "3.13.0", name: "SuperCollider 3.13.0", date: "2023-02-19" }],
      stackovTags: ["supercollider"],
    })
    .relInfluencedBy.add("pl+csound", "pl+lisp")
    .relLicenses.add("lic+gnu-gpl")
    .relParadigms.add("para+concurrent", "para+event-driven", "para+functional", "para+oop")
    .relPlatforms.add("plat+apple", "plat+bsd", "plat+cross", "plat+linux", "plat+windows")
    .relTags.add("tag+app", "tag+audio-dev", "tag+dsp", "tag+framework", "tag+interpreters")
    .relTypeSystems.add("tsys+dynamic")
    .relWrittenWith.add("pl+c++");

  // TOOLS

  // TOOL BUNDLES

  // LIBRARIES

  // APPS
}
