import type { PlangsGraph } from "@plangs/plangs";

export function define(g: PlangsGraph) {
  g.nodes.pl
    .set("pl+supercollider", {
      name: "SuperCollider",
      description:
        "SuperCollider is an environment and programming language originally released in 1996 by James McCartney for real-time audio synthesis and algorithmic composition. It is used by musicians, artists, and researchers working with sound.",
      keywords: ["algorithmic", "audio", "music", "supercollider", "synthesis"],
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
    })
    .relInfluencedBy.add(["pl+csound", "pl+lisp"])
    .relLicenses.add(["license+gnu-gpl"])
    .relParadigms.add(["paradigm+concurrent", "paradigm+event-driven", "paradigm+functional", "paradigm+oop"])
    .relPlatforms.add(["plat+apple", "plat+bsd", "plat+cross", "plat+linux", "plat+windows"])
    .relTags.add(["tag+app", "tag+audio-dev", "tag+dsp", "tag+framework", "tag+interpreters"])
    .relTsys.add(["tsys+dynamic"])
    .relWrittenIn.add(["pl+c++"]);

  // TOOLS

  // TOOL BUNDLES

  // LIBRARIES

  // APPS
}
