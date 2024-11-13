import type { PlangsGraph } from "@plangs/plangs";

export function define(g: PlangsGraph) {
  g.nodes.pl
    .set("pl+supercollider", {
      name: "SuperCollider",
      description:
        "SuperCollider is an environment and programming language originally released in 1996 by James McCartney for real-time audio synthesis and algorithmic composition. It is used by musicians, artists, and researchers working with sound.",
      keywords: ["algorithmic", "audio", "music", "supercollider", "synthesis"],
      websites: [
        { title: "SuperCollider", href: "http://supercollider.github.io/", kind: "homepage" },
        { title: "SuperCollider", href: "https://en.wikipedia.org/wiki/SuperCollider", kind: "wikipedia" },
        { title: "SuperCollider on Reddit", kind: "reddit", href: "https://reddit.com/r/supercollider" },
      ],
      extensions: [".scd"],
      year: 1996,
      isTranspiler: false,
      isMainstream: false,
      releases: [{ version: "3.13.0", name: "SuperCollider 3.13.0", date: "2023-01-01" }],
      stackovTags: ["supercollider"],
      githubName: "SuperCollider",
      languishRanking: 218,
      githubLangId: "361",
      githubColor: "#46390b",
      githubPopular: false,
      githubType: "programming",
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
