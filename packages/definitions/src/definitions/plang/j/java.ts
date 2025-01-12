import type { PlangsGraph } from "@plangs/plangs/graph";

export function define(g: PlangsGraph) {
  g.plang
    .set("pl+java", {
      name: "Java",
      description:
        "High-level programming language originally developed by Sun Microsystems and now owned by Oracle, known for its portability, strong memory management, and extensive ecosystem.",
      shortDesc:
        "High-level language known for its portability and extensive ecosystem.",
      created: "1995",
      extensions: [".class", ".jar", ".java", ".jmod", ".war"],
      extHomeURL: "https://openjdk.java.net/",
      extRedditPath: "java",
      extWikipediaPath: "Java_(programming_language)",
      githubColor: "#b07219",
      githubLangId: "181",
      githubName: "Java",
      githubPopular: true,
      githubType: "programming",
      isTranspiler: false,
      keywords: ["java"],
      languishRanking: 4,
      releases: [
        { version: "17", name: "Java SE 17", date: "2021-09-14" },
        { version: "20", name: "Java SE 20", date: "2023-03-21" },
        { version: "21", name: "Java SE 21", date: "2023-09-19" },
      ],
      stackovTags: ["java"],
    })
    .relInfluencedBy.add("pl+c++")
    .relLicenses.add("lic+gnu-gpl")
    .relParadigms.add(
      "para+compiled",
      "para+concurrent",
      "para+functional",
      "para+general-purpose",
      "para+imperative",
      "para+multi",
      "para+oop",
      "para+parallel",
      "para+reflective",
    )
    .relPlatforms.add(
      "plat+android",
      "plat+apple",
      "plat+cross",
      "plat+java",
      "plat+linux",
      "plat+windows",
    )
    .relTags.add("tag+app", "tag+compiler", "tag+server")
    .relTypeSystems.add(
      "tsys+generic",
      "tsys+manifest",
      "tsys+nominal",
      "tsys+object",
      "tsys+safe",
      "tsys+static",
      "tsys+strong",
    )
    .relWrittenWith.add("pl+c");
}
