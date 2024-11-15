import type { PlangsGraph } from "@plangs/plangs";

export function define(g: PlangsGraph) {
  g.nodes.pl
    .set("pl+supercollider", {
      name: "SuperCollider",
      description:
        "SuperCollider is an environment and programming language originally released in 1996 by James McCartney for real-time audio synthesis and algorithmic composition. It is used by musicians, artists, and researchers working with sound.",
      keywords: ["algorithmic", "audio", "music", "supercollider", "synthesis"],
      extensions: [".scd"],
      year: 1996,
      isMainstream: false,
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
    })
    .addInfluencedBy(["pl+csound", "pl+lisp", "pl+smalltalk"])
    .addLicenses(["license+gnu-gpl"])
    .addParadigms(["paradigm+concurrent", "paradigm+event-driven", "paradigm+functional", "paradigm+oop"])
    .addPlatforms(["plat+apple", "plat+bsd", "plat+cross", "plat+linux", "plat+windows"])
    .addTags(["tag+app", "tag+audio-dev", "tag+dsp", "tag+framework", "tag+interpreter"])
    .addTypeSystems(["tsys+dynamic"])
    .addWrittenIn(["pl+c++"]);

  // TOOLS

  // TOOL BUNDLES

  // LIBRARIES

  // APPS
}