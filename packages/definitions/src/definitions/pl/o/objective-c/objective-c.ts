import type { PlangsGraph } from "@plangs/plangs";

export function define(g: PlangsGraph) {
  g.nodes.pl
    .set("pl+objective-c", {
      name: "Objective-C",
      languishRanking: 33,
      stackovTags: ["objective-c"],
      githubName: "Objective-C",
      githubLangId: "257",
      githubColor: "#438eff",
      githubPopular: true,
      githubType: "programming",
      description:
        "Objective-C is a high-level general-purpose, object-oriented programming language that adds Smalltalk-style message passing to the C programming language. It was primarily designed by Brad Cox and Tom Love and was later selected by NeXT for its NeXTSTEP operating system. Due to its integration with Apple's macOS and iOS, Objective-C became Apple's standard language for developing macOS and iOS applications up until the introduction of Swift in 2014.",
      keywords: ["Apple", "Objective-C", "iOS", "language", "macOS", "programming"],
      extensions: [".M", ".h", ".m", ".mm"],
      year: 1984,
      isMainstream: true,
      releases: [{ version: "2.0", name: "Objective-C 2.0", date: "2007" }],
      extWikipediaPath: "Objective-C",
      extRedditPath: "ObjectiveC",
    })
    .addParadigms(["paradigm+oop", "paradigm+reflective"])
    .addPlatforms(["plat+cross"])
    .addTypeSystems(["tsys+dynamic", "tsys+static", "tsys+weak"]);

  // TOOLS

  // TOOL BUNDLES

  // LIBRARIES

  // APPS
}
