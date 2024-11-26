import type { PlangsGraph } from "@plangs/plangs/graph";

export function define(g: PlangsGraph) {
  g.plang.    .set("pl+odin", {
      name: "Odin",
      description:
        "Odin is a general-purpose programming language designed for high performance, simplicity, and data-oriented programming. As an alternative to C, it emphasizes modern systems programming and ease of use, making it suitable for a wide range of applications, including those in gaming and film industries.",
      keywords: ["odin", "odin-lang", "programming"],
      extensions: [".odin"],
      releases: [{ version: "0.13.0", name: "Odin 0.13.0", date: "2023-08-21" }],
      githubName: "Odin",
      languishRanking: 162,
      githubLangId: "889244082",
      githubColor: "#60AFFE",
      githubPopular: false,
      githubType: "programming",
      extRedditPath: "Odinlang",
      extHomeURL: "https://odin-lang.org/",
      created: "2016",
    })
    .relInfluencedBy.add(["pl+c"])
    .relLicense.add(["license+mit"])
    .relParadigm.add([
      "para+compiled",
      "para+concurrent",
      "para+functional",
      "para+general-purpose",
      "para+imperative",
      "para+procedural",
    ])
    .relPlatforms.add(["plat+arm", "plat+cross", "plat+linux", "plat+wasm", "plat+web", "plat+windows", "plat+x86-64"])
    .relTags.add(["tag+compiler"])
    .relTsys.add(["tsys+inferred", "tsys+static", "tsys+strong"])
    .relWrittenIn.add(["pl+odin"]);

  // TOOLS

  // TOOL BUNDLES

  // LIBRARIES

  // APPS
}
