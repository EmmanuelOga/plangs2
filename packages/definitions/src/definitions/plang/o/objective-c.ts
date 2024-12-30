import type { PlangsGraph } from "@plangs/plangs/graph";

export function define(g: PlangsGraph) {
  g.plang
    .set("pl+objective-c", {
      name: "Objective-C",
      description:
        "High-level object-oriented language that extends C with Smalltalk-style message passing, originally developed in the early 1980s and widely associated with Apple's macOS and iOS platforms. It gained prominence through its use in conjunction with Apple's development ecosystem for macOS and iOS until the rise of Swift.",
      shortDesc: "Object-oriented language that extends C with Smalltalk-style message passing.",
      created: "1984",
      extensions: [".M", ".h", ".m", ".mm"],
      extHomeURL: "https://developer.apple.com/documentation/objectivec",
      extRedditPath: "ObjectiveC",
      extWikipediaPath: "Objective-C",
      githubColor: "#438eff",
      githubLangId: "257",
      githubName: "Objective-C",
      githubPopular: true,
      githubStars: 0,
      githubType: "programming",
      isTranspiler: false,
      keywords: ["apple", "ios", "macos", "message-passing", "objective-c", "programming"],
      languishRanking: 33,
      releases: [{ version: "2.0", name: "Objective-C 2.0", date: "2007-10-01" }],
      stackovTags: ["objective-c"],
    })
    .relInfluencedBy.add("pl+c")
    .relLicenses.add("lic+apsl")
    .relParadigms.add("para+oop", "para+procedural", "para+reflective")
    .relPlatforms.add("plat+apple", "plat+cross")
    .relTypeSystems.add("tsys+dynamic", "tsys+static", "tsys+weak")
    .relWrittenWith.add("pl+c");
}
