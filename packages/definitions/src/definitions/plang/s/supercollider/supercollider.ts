import type { PlangsGraph } from "@plangs/plangs/graph";

export function define(g: PlangsGraph) {
  g.plang
    .set("pl+supercollider", {
      name: "SuperCollider",
      description:
        "SuperCollider is an advanced programming environment used for real-time audio synthesis and algorithmic music composition, originally introduced by James McCartney in 1996. It plays a significant role in sound design and music technology.",
      keywords: ["algorithmic", "audio", "sound", "supercollider", "synthesis"],
      extensions: [".scd"],
      releases: [{ version: "3.13.0", name: "SuperCollider 3.13.0", date: "2023-02-19" }],
      stackovTags: ["supercollider"],
      githubName: "SuperCollider",
      languishRanking: 218,
      githubLangId: "361",
      githubColor: "#46390b",
      githubPopular: false,
      githubType: "programming",
      extWikipediaPath: "SuperCollider",
      extRedditPath: "supercollider",
      extHomeURL: "http://supercollider.github.io/",
      created: "1996",
      isTranspiler: false,
      shortDesc: "SuperCollider is for real-time audio synthesis and music composition.",
      githubStars: 5600,
      extGithubPath: "supercollider/supercollider",
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
