import type { PlangsGraph } from "@plangs/plangs/graph";

export function define(g: PlangsGraph) {
  g.plang
    .set("pl+swift", {
      name: "Swift",
      description:
        "Powerful and intuitive programming language developed by Apple Inc. for iOS, macOS, watchOS, and tvOS app development. It was introduced in 2014 as an alternative to Objective-C, designed for safety, performance, and modern software design patterns.",
      shortDesc: "Developed by Apple for its platforms, with a focus on safety and performance.",
      created: "2014",
      extensions: [".swift"],
      extGithubPath: "swiftlang/swift",
      extHomeURL: "https://www.swift.org/",
      extRedditPath: "swift",
      extWikipediaPath: "Swift_(programming_language)",
      githubColor: "#F05138",
      githubLangId: "362",
      githubName: "Swift",
      githubPopular: true,
      githubStars: 67700,
      githubType: "programming",
      isTranspiler: false,
      keywords: ["apple", "ios", "macos", "swift", "xcode"],
      languishRanking: 17,
      releases: [{ version: "6.0.1", date: "2024-09-27" }],
      stackovTags: ["swift"],
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
}
