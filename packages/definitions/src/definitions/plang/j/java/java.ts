import type { PlangsGraph } from "@plangs/plangs/graph";

export function define(g: PlangsGraph) {
  g.plang
    .set("pl+java", {
      name: "Java",
      description:
        "Java is a high-level programming language originally developed by Sun Microsystems and now owned by Oracle, known for its portability, strong memory management, and extensive ecosystem.",
      keywords: ["java"],
      extensions: [".class", ".jar", ".java", ".jmod", ".war"],
      releases: [
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
      isTranspiler: false,
      shortDesc: "Java is a high-level language known for its portability and extensive ecosystem.",
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
