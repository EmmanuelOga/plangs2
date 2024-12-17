import type { PlangsGraph } from "@plangs/plangs/graph";

export function define(g: PlangsGraph) {
  g.plang
    .set("pl+xtend", {
      name: "Xtend",
      description:
        "Xtend is a high-level language for the JVM, offering concise syntax, type inference, and integration with Java libraries. It supports functional programming features and compiles to Java code, ensuring Java compatibility.",
      shortDesc: "Xtend is a high-level, JVM language that compiles to Java and supports functional programming features.",
      created: "2011",
      extensions: [".xtend"],
      extGithubPath: "eclipse-xtext/xtext",
      extHomeURL: "https://eclipse.dev/Xtext/xtend/",
      extWikipediaPath: "Xtend",
      githubColor: "#24255d",
      githubLangId: "406",
      githubName: "Xtend",
      githubPopular: false,
      githubStars: 771,
      githubType: "programming",
      isTranspiler: true,
      keywords: ["eclipse", "java", "jvm", "xtend"],
      languishRanking: 269,
      releases: [{ version: "2.25.0", name: "Xtend 2.25.0", date: "2021-03-02" }],
      stackovTags: ["xtend"],
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
