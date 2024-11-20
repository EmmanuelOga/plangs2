import type { PlangsGraph } from "@plangs/plangs";

export function define(g: PlangsGraph) {
  g.nodes.pl
    .set("pl+ballerina", {
      name: "Ballerina",
      description:
        "Ballerina is an open source general-purpose programming language designed by WSO2 for cloud-era application programmers. It is designed to simplify the creation of integration solutions with built-in features for concurrency, making it ideal for cloud-native development.",
      keywords: ["ballerina", "cloud-native", "integration"],
      extensions: [".bal"],
      releases: [{ version: "2201.10.2", name: "Swan Lake Update 10", date: "2024-09-05" }],
      stackovTags: ["ballerina"],
      githubName: "Ballerina",
      languishRanking: 140,
      githubLangId: "720859680",
      githubColor: "#FF5000",
      githubPopular: false,
      githubType: "programming",
      extWikipediaPath: "Ballerina_(programming_language)",
      extRedditPath: "ballerinalang",
      extHomeURL: "http://ballerina.io/",
      created: "2017",
    })
    .addInfluencedBy(["pl+c-sharp", "pl+go", "pl+javascript", "pl+rust"])
    .addLicenses(["license+apache"])
    .addParadigms([
      "paradigm+compiled",
      "paradigm+concurrent",
      "paradigm+event-driven",
      "paradigm+functional",
      "paradigm+general-purpose",
      "paradigm+multi",
    ])
    .addPlatforms(["plat+cross"])
    .addTags(["tag+automation", "tag+interpreters", "tag+workflow"])
    .addTypeSystems(["tsys+inferred", "tsys+static", "tsys+strong", "tsys+structural"]);

  // TOOLS

  // TOOL BUNDLES

  // LIBRARIES

  // APPS
}
