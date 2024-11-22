import type { PlangsGraph } from "@plangs/plangs";

export function define(g: PlangsGraph) {
  g.nodes.pl
    .set("pl+groovy", {
      name: "Groovy",
      description:
        "Apache Groovy is a powerful, optionally typed and dynamic language, with static-typing and static compilation capabilities, for the Java platform. Designed to improve developer productivity, it features a concise, familiar syntax, integrates smoothly with any Java program, and enhances your application with capabilities like scripting, Domain-Specific Language authoring, runtime and compile-time metaprogramming, and functional programming. It has a flat learning curve for Java developers, seamlessly interoperates with Java libraries, and boasts a vibrant ecosystem that includes web development, reactive applications, and build tools like Gradle.",
      keywords: ["groovy", "java", "language", "programming", "scripting"],
      extensions: [".groovy", ".gsh", ".gvy", ".gy"],
      releases: [
        { version: "4.0.23", name: "Groovy 4.0.23", date: "2024-09-09" },
        { version: "4.0.0", name: "Groovy 4.0.0", date: "2022-01-25" },
        { version: "3.0.0", name: "Groovy 3.0", date: "2020-02-07" },
        { version: "2.0.0", name: "Groovy 2.0", date: "2012-07-02" },
        { version: "1.0.0", name: "Groovy 1.0", date: "2007-01-02" },
        { version: "4.0.22", name: "Groovy 4.0.22", date: "2024-01-01" },
      ],
      stackovTags: ["groovy"],
      githubName: "Groovy",
      languishRanking: 61,
      githubLangId: "142",
      githubColor: "#4298b8",
      githubPopular: true,
      githubType: "programming",
      extWikipediaPath: "Apache_Groovy",
      extRedditPath: "groovy",
      extHomeURL: "https://groovy-lang.org/",
      created: "2003",
    })
    .relInfluencedBy.add(["pl+perl", "pl+python", "pl+ruby"])
    .relLicenses.add(["license+apache"])
    .relParadigms.add(["paradigm+aspect", "paradigm+functional", "paradigm+imperative", "paradigm+multi", "paradigm+oop", "paradigm+scripting"])
    .relPlatforms.add(["plat+java"])
    .relTags.add(["tag+compiler", "tag+framework", "tag+interpreters", "tag+scripting", "tag+testing"])
    .relTsys.add(["tsys+duck", "tsys+dynamic", "tsys+static", "tsys+strong"]);

  // TOOLS

  // TOOL BUNDLES

  // LIBRARIES

  // APPS
}
