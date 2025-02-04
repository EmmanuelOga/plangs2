import type { PlangsGraph } from "@plangs/plangs/graph";

export function define(g: PlangsGraph) {
  g.plang
    .set("pl+ballerina", {
      name: "Ballerina",
      description:
        "Open source general-purpose programming language designed by WSO2 for cloud-era application programmers. It is designed to simplify the creation of integration solutions with built-in features for concurrency, making it ideal for cloud-native development.",
      shortDesc:
        "Open source general-purpose programming language designed for cloud-native and concurrent applications.",
      created: "2017",
      extensions: [".bal"],
      extGithubPath: "ballerina-platform/ballerina-lang",
      extHomeURL: "https://ballerina.io",
      extRedditPath: "ballerinalang",
      extWikipediaPath: "Ballerina_(programming_language)",
      githubColor: "#FF5000",
      githubLangId: "720859680",
      githubName: "Ballerina",
      githubPopular: false,
      githubStars: 3700,
      githubType: "programming",
      isTranspiler: false,
      keywords: ["ballerina", "cloud-native", "integration"],
      languishRanking: 156,
      releases: [
        {
          version: "2201.10.2",
          name: "Swan Lake Update 10",
          date: "2024-09-05",
        },
      ],
      stackovTags: ["ballerina"],
    })
    .relInfluencedBy.add("pl+c-sharp", "pl+go", "pl+javascript", "pl+rust")
    .relLicenses.add("lic+apache")
    .relParadigms.add(
      "para+compiled",
      "para+concurrent",
      "para+event-driven",
      "para+functional",
      "para+general-purpose",
      "para+multi",
    )
    .relPlatforms.add("plat+cross")
    .relTags.add(
      "tag+automation",
      "tag+interpreters",
      "tag+iot",
      "tag+workflow",
    )
    .relTypeSystems.add(
      "tsys+inferred",
      "tsys+static",
      "tsys+strong",
      "tsys+structural",
    );
}
