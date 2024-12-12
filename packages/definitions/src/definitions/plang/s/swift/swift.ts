import type { PlangsGraph } from "@plangs/plangs/graph";

export function define(g: PlangsGraph) {
  g.plang
    .set("pl+swift", {
      name: "Swift",
      description:
        "Swift is a powerful and intuitive programming language developed by Apple Inc. for iOS, macOS, watchOS, and tvOS app development. It was introduced in 2014 as an alternative to Objective-C, designed for safety, performance, and modern software design patterns.",
      keywords: ["apple", "ios", "macos", "swift", "xcode"],
      extensions: [".swift"],
      releases: [{ version: "6.0.1", date: "2024-09-27" }],
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
      isTranspiler: false,
      shortDesc: "Swift is a programming language developed by Apple Inc. for its platforms with a focus on safety and performance.",
      githubStars: 67700,
      extGithubPath: "swiftlang/swift",
    })
    .relInfluencedBy.add("pl+c", "pl+c-sharp", "pl+d", "pl+haskell", "pl+lisp", "pl+objective-c", "pl+python", "pl+ruby", "pl+rust", "pl+scala")
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
      "tag+gui",
      "tag+industrial",
      "tag+interpreters",
      "tag+scripting",
      "tag+server",
    )
    .relTypeSystems.add("tsys+inferred", "tsys+static", "tsys+strong")
    .relWrittenWith.add("pl+c++");

  // TOOLS

  // TOOL BUNDLES

  // LIBRARIES

  // APPS
}
