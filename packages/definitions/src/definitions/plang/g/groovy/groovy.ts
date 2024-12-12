import type { PlangsGraph } from "@plangs/plangs/graph";

export function define(g: PlangsGraph) {
  g.plang
    .set("pl+groovy", {
      name: "Groovy",
      description:
        "Apache Groovy is a optionally typed and dynamic language for the Java platform, offering seamless integration with Java, concise syntax, and meta-programming features.",
      keywords: ["groovy", "java", "language", "programming", "scripting"],
      extensions: [".groovy", ".gsh", ".gvy", ".gy"],
      releases: [{ version: "4.0.24", date: "2024-09-09" }],
      stackovTags: ["groovy"],
      githubName: "Groovy",
      languishRanking: 61,
      githubLangId: "142",
      githubColor: "#4298b8",
      githubPopular: true,
      githubType: "programming",
      extWikipediaPath: "Apache_Groovy",
      extRedditPath: "groovy",
      extHomeURL: "http://groovy-lang.org/",
      created: "2003",
      isTranspiler: false,
      shortDesc: "Groovy is a flexible and dynamic language for the Java platform with strong integration capabilities.",
      githubStars: 5200,
      extGithubPath: "apache/groovy",
      ghRepoCreated: "2014-11-08",
    })
    .relInfluencedBy.add("pl+perl", "pl+python", "pl+ruby")
    .relLicenses.add("lic+apache")
    .relParadigms.add("para+aspect", "para+functional", "para+imperative", "para+multi", "para+oop", "para+scripting")
    .relPlatforms.add("plat+java")
    .relTags.add("tag+compiler", "tag+framework", "tag+interpreters", "tag+scripting", "tag+testing")
    .relTypeSystems.add("tsys+duck", "tsys+dynamic", "tsys+static", "tsys+strong");

  // TOOLS

  // TOOL BUNDLES

  // LIBRARIES

  // APPS
}
