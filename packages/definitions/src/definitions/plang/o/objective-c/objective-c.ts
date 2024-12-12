import type { PlangsGraph } from "@plangs/plangs/graph";

export function define(g: PlangsGraph) {
  g.plang
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
        "Objective-C is a high-level object-oriented programming language that extends C with Smalltalk-style message passing, originally developed in the early 1980s and widely associated with Apple's macOS and iOS platforms. It gained prominence through its use in conjunction with Apple's development ecosystem for macOS and iOS until the rise of Swift.",
      keywords: ["apple", "ios", "macos", "message-passing", "objective-c", "programming"],
      extensions: [".M", ".h", ".m", ".mm"],
      releases: [{ version: "2.0", name: "Objective-C 2.0", date: "2007-10-01" }],
      extWikipediaPath: "Objective-C",
      extRedditPath: "ObjectiveC",
      created: "1984",
      isTranspiler: false,
      shortDesc: "Objective-C is an object-oriented programming language that extends C with Smalltalk-style message passing.",
      extHomeURL: "https://developer.apple.com/documentation/objectivec",
      githubStars: 0,
    })
    .relInfluencedBy.add("pl+c")
    .relLicenses.add("lic+apsl")
    .relParadigms.add("para+oop", "para+procedural", "para+reflective")
    .relPlatforms.add("plat+apple", "plat+cross")
    .relTypeSystems.add("tsys+dynamic", "tsys+static", "tsys+weak")
    .relWrittenWith.add("pl+c");

  // TOOLS

  // TOOL BUNDLES

  // LIBRARIES

  // APPS
}
