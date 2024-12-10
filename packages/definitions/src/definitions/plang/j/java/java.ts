import type { PlangsGraph } from "@plangs/plangs/graph";

export function define(g: PlangsGraph) {
  g.plang
    .set("pl+java", {
      name: "Java",
      description:
        'Java is a high-level programming language developed by Sun Microsystems, now owned by Oracle. It is designed to have as few implementation dependencies as possible, making it a versatile and widely-used language. Java is known for its portability across platforms, "write once, run anywhere" capability, strong memory management, and vast ecosystem.',
      keywords: ["java"],
      extensions: [".class", ".jar", ".java", ".jmod", ".war"],
      releases: [
        { version: "JDK 1.0", name: "Java SE 1.0", date: "1996-01-23" },
        { version: "Java SE 8", name: "Java SE 8", date: "2014-03-18" },
        { version: "Java SE 11", name: "Java SE 11", date: "2018-09-25" },
        { version: "Java SE 17", name: "Java SE 17", date: "2021-09-14" },
        { version: "Java SE 21", name: "Java SE 21", date: "2023-09-19" },
        { version: "17", name: "Java SE 17", date: "2021-09-14" },
        { version: "20", name: "Java SE 20", date: "2023-03-21" },
        { version: "21", name: "Java SE 21", date: "2023-09-19" },
      ],
      stackovTags: ["java"],
      githubName: "Java",
      languishRanking: 4,
      githubLangId: "181",
      githubColor: "#b07219",
      githubPopular: true,
      githubType: "programming",
      extWikipediaPath: "Java_(programming_language)",
      extRedditPath: "java",
      extHomeURL: "https://openjdk.java.net/",
      created: "1995",
    })
    .relInfluencedBy.add("pl+c++")
    .relLicenses.add("lic+gnu-gpl")
    .relParadigms.add("para+compiled", "para+concurrent", "para+functional", "para+imperative", "para+multi", "para+oop", "para+reflective")
    .relPlatforms.add("plat+android", "plat+apple", "plat+cross", "plat+java", "plat+linux", "plat+windows")
    .relTags.add("tag+app", "tag+compiler", "tag+server")
    .relTypeSystems.add("tsys+manifest", "tsys+nominal", "tsys+safe", "tsys+static", "tsys+strong")
    .relWrittenWith.add("pl+c");

  // TOOLS

  // TOOL BUNDLES

  // LIBRARIES

  // APPS
}
