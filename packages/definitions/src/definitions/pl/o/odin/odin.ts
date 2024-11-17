import type { PlangsGraph } from "@plangs/plangs";

export function define(g: PlangsGraph) {
  g.nodes.pl
    .set("pl+odin", {
      name: "Odin",
      description:
        "Odin is a general-purpose programming language designed for high performance, simplicity, and data-oriented programming. As an alternative to C, it emphasizes modern systems programming and ease of use, making it suitable for a wide range of applications, including those in gaming and film industries.",
      keywords: ["odin", "odin-lang", "programming"],
      extensions: [".odin"],
      year: 2016,
      isMainstream: true,
      releases: [{ version: "0.13.0", name: "Odin 0.13.0", date: "2023-08-21" }],
      githubName: "Odin",
      languishRanking: 162,
      githubLangId: "889244082",
      githubColor: "#60AFFE",
      githubPopular: false,
      githubType: "programming",
      extRedditPath: "Odinlang",
      extHomeURL: "https://odin-lang.org/",
    })
    .addInfluencedBy(["pl+c"])
    .addLicenses(["license+mit"])
    .addParadigms([
      "paradigm+compiled",
      "paradigm+concurrent",
      "paradigm+functional",
      "paradigm+general-purpose",
      "paradigm+imperative",
      "paradigm+procedural",
    ])
    .addPlatforms(["plat+arm", "plat+cross", "plat+linux", "plat+wasm", "plat+web", "plat+windows", "plat+x86-64"])
    .addTags(["tag+compiler"])
    .addTypeSystems(["tsys+inferred", "tsys+static", "tsys+strong"])
    .addWrittenIn(["pl+odin"]);

  // TOOLS

  // TOOL BUNDLES

  // LIBRARIES

  // APPS
}
