import type { PlangsGraph } from "@plangs/plangs/graph";

export function define(g: PlangsGraph) {
  g.plang
    .set("pl+swift", {
      name: "Swift",
      description:
        "Swift is a general-purpose programming language that’s approachable for newcomers and powerful for experts. It is fast, modern, safe, and a joy to write. Swift was developed by Apple Inc. and open-source contributors as a replacement for Objective-C. Swift's syntax is simple yet powerful, incorporating concepts from various languages. It was first released on June 2, 2014, and has become the primary language for Apple platform development.",
      keywords: ["Apple", "Xcode", "swift"],
      extensions: [".swift"],
      releases: [
        { version: "5.10.1", name: "Swift 5.10.1", date: "2024-06-05" },
        { version: "6.0.1", name: "Swift 6.0.1", date: "2024-09-27" },
        { version: "6.0", name: "Swift 6.0", date: "2024-01-01" },
      ],
      stackovTags: ["swift"],
      githubName: "Swift",
      languishRanking: 17,
      githubLangId: "362",
      githubColor: "#F05138",
      githubPopular: true,
      githubType: "programming",
      extWikipediaPath: "Swift_(programming_language)",
      extRedditPath: "swift",
      extHomeURL: "https://www.swift.org/",
      created: "2014",
    })
    .relInfluencedBy.add("pl+c", "pl+c-sharp", "pl+d", "pl+haskell", "pl+lisp", "pl+python", "pl+ruby", "pl+rust")
    .relLicenses.add("lic+apache")
    .relParadigms.add(
      "para+concurrent",
      "para+dataflow",
      "para+declarative",
      "para+distributed",
      "para+functional",
      "para+imperative",
      "para+multi",
      "para+oop",
      "para+protocol",
      "para+scientific",
      "para+scripting",
      "para+structured",
    )
    .relPlatforms.add("plat+android", "plat+apple", "plat+cross", "plat+java", "plat+linux", "plat+windows")
    .relTags.add(
      "tag+app",
      "tag+compiler",
      "tag+dataflow",
      "tag+dbms",
      "tag+flow",
      "tag+framework",
      "tag+industrial",
      "tag+interpreters",
      "tag+scripting",
      "tag+server",
      "tag+ui",
    )
    .relTypeSystems.add("tsys+inferred", "tsys+static", "tsys+strong");

  // TOOLS

  // TOOL BUNDLES

  // LIBRARIES

  // APPS
}
