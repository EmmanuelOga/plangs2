import type { PlangsGraph } from "@plangs/plangs/graph";

export function define(g: PlangsGraph) {
  g.plang
    .set("pl+odin", {
      name: "Odin",
      description:
        "A high-performance, systems programming language designed for simplicity and data-oriented development, serving as a modern alternative to C with a focus on clarity and ease of use, particularly in gaming and multimedia applications.",
      shortDesc:
        "A high-performance language, offers an alternative to C for systems programming with a focus on simplicity and data-oriented development.",
      created: "2016",
      extensions: [".odin"],
      extGithubPath: "odin-lang/Odin",
      extHomeURL: "https://odin-lang.org",
      extRedditPath: "Odinlang",
      githubColor: "#60AFFE",
      githubLangId: "889244082",
      githubName: "Odin",
      githubPopular: false,
      githubStars: 7100,
      githubType: "programming",
      isTranspiler: true,
      keywords: ["odin", "odin-lang", "programming"],
      languishRanking: 171,
      releases: [
        { version: "0.13.0", name: "Odin 0.13.0", date: "2023-08-21" },
      ],
    })
    .relCompilesTo.add("pl+webassembly")
    .relInfluencedBy.add("pl+c")
    .relLicenses.add("lic+mit")
    .relParadigms.add(
      "para+compiled",
      "para+concurrent",
      "para+functional",
      "para+general-purpose",
      "para+imperative",
      "para+procedural",
    )
    .relPlatforms.add(
      "plat+arm",
      "plat+cross",
      "plat+linux",
      "plat+wasm",
      "plat+web",
      "plat+windows",
      "plat+x86-64",
    )
    .relTags.add("tag+compiler")
    .relTypeSystems.add("tsys+inferred", "tsys+static", "tsys+strong")
    .relWrittenWith.add("pl+odin");
}
