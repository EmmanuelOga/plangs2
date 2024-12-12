import type { PlangsGraph } from "@plangs/plangs/graph";

export function define(g: PlangsGraph) {
  g.plang
    .set("pl+xtend", {
      name: "Xtend",
      description:
        "Xtend is a high-level language for the JVM, offering concise syntax, type inference, and integration with Java libraries. It supports functional programming features and compiles to Java code, ensuring Java compatibility.",
      keywords: ["eclipse", "java", "jvm", "xtend"],
      extensions: [".xtend"],
      isTranspiler: true,
      releases: [{ version: "2.25.0", name: "Xtend 2.25.0", date: "2021-03-02" }],
      stackovTags: ["xtend"],
      githubName: "Xtend",
      languishRanking: 269,
      githubLangId: "406",
      githubColor: "#24255d",
      githubPopular: false,
      githubType: "programming",
      extWikipediaPath: "Xtend",
      extHomeURL: "https://eclipse.dev/Xtext/xtend/",
      created: "2011",
      shortDesc: "Xtend is a high-level, JVM language that compiles to Java and supports functional programming features.",
      githubStars: 771,
      extGithubPath: "eclipse-xtext/xtext",
      ghRepoCreated: "2011-09-07",
    })
    .relCompilesTo.add("pl+java")
    .relInfluencedBy.add("pl+groovy", "pl+java", "pl+scala")
    .relLicenses.add("lic+epl")
    .relParadigms.add("para+functional", "para+imperative", "para+oop")
    .relPlatforms.add("plat+cross", "plat+java")
    .relTags.add("tag+compiler", "tag+editor", "tag+interpreters")
    .relTypeSystems.add("tsys+inferred", "tsys+static", "tsys+strong")
    .relWrittenWith.add("pl+java");

  // TOOLS

  // TOOL BUNDLES

  // LIBRARIES

  // APPS
}
