import type { PlangsGraph } from "@plangs/plangs/graph";

export function define(g: PlangsGraph) {
  g.plang
    .set("pl+groovy", {
      name: "Groovy",
      description:
        "Optionally typed and dynamic language for the Java platform, offering seamless integration with Java, concise syntax, and meta-programming features.",
      shortDesc:
        "Flexible and dynamic language for the Java platform with strong integration capabilities.",
      created: "2003",
      extensions: [".groovy", ".gsh", ".gvy", ".gy"],
      extGithubPath: "apache/groovy",
      extHomeURL: "http://groovy-lang.org/",
      extRedditPath: "groovy",
      extWikipediaPath: "Apache_Groovy",
      githubColor: "#4298b8",
      githubLangId: "142",
      githubName: "Groovy",
      githubPopular: true,
      githubStars: 5200,
      githubType: "programming",
      isTranspiler: false,
      keywords: ["groovy", "java", "language", "programming", "scripting"],
      languishRanking: 61,
      releases: [{ version: "4.0.24", date: "2024-09-09" }],
      stackovTags: ["groovy"],
    })
    .relInfluencedBy.add("pl+perl", "pl+python", "pl+ruby")
    .relLicenses.add("lic+apache")
    .relParadigms.add(
      "para+aspect",
      "para+functional",
      "para+imperative",
      "para+multi",
      "para+oop",
      "para+scripting",
    )
    .relPlatforms.add("plat+java")
    .relTags.add(
      "tag+compiler",
      "tag+framework",
      "tag+interpreters",
      "tag+scripting",
      "tag+testing",
    )
    .relTypeSystems.add(
      "tsys+duck",
      "tsys+dynamic",
      "tsys+static",
      "tsys+strong",
    );
}
