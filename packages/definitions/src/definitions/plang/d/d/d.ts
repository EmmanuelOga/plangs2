import type { PlangsGraph } from "@plangs/plangs/graph";

export function define(g: PlangsGraph) {
  g.plang
    .set("pl+d", {
      name: "D",
      description:
        "D, also known as dlang, is a multi-paradigm system programming language created by Walter Bright at Digital Mars and released in 2001. Andrei Alexandrescu joined the design and development effort in 2007. Though it originated as a re-engineering of C++, D is now a very different language. As it has developed, it has drawn inspiration from other high-level programming languages. Notably, it has been influenced by Java, Python, Ruby, C#, and Eiffel.",
      keywords: ["d language", "d programming", "dlang"],
      extensions: [".d"],
      releases: [{ version: "2.109.1", name: "Stable Release", date: "2024-07-01" }],
      stackovTags: ["d"],
      githubName: "D",
      languishRanking: 147,
      githubLangId: "80",
      githubColor: "#ba595e",
      githubPopular: false,
      githubType: "programming",
      extWikipediaPath: "D_(programming_language)",
      extRedditPath: "d_language",
      extHomeURL: "http://dlang.org/",
      created: "2001",
    })
    .relInfluencedBy.add("pl+ada", "pl+basic", "pl+c", "pl+c++", "pl+c-sharp", "pl+eiffel", "pl+python", "pl+ruby")
    .relLicenses.add("lic+boost")
    .relParadigms.add("para+concurrent", "para+functional", "para+imperative", "para+metaprogramming", "para+multi", "para+oop")
    .relPlatforms.add("plat+apple", "plat+bsd", "plat+linux", "plat+windows")
    .relTags.add(
      "tag+analysis",
      "tag+app",
      "tag+asm",
      "tag+cli",
      "tag+compiler",
      "tag+games",
      "tag+gui",
      "tag+industrial",
      "tag+interpreters",
      "tag+numeric",
      "tag+sci",
      "tag+viz",
    )
    .relTypeSystems.add("tsys+inferred", "tsys+static", "tsys+strong");

  // TOOLS

  // TOOL BUNDLES

  // LIBRARIES

  // APPS
}
