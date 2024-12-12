import type { PlangsGraph } from "@plangs/plangs/graph";

export function define(g: PlangsGraph) {
  g.plang
    .set("pl+d", {
      name: "D",
      description:
        "D is a system programming language created by Walter Bright at Digital Mars and later joined by Andrei Alexandrescu, offering a unique blend of efficiency and expressiveness inspired by C++ but standing distinct from it. It incorporates multiple programming paradigms and features an innovative type system, appealing to programmers looking for modernized C++ alternatives. D is influenced by languages such as Java, Python, and C#, and it has, in turn, influenced newer languages like Rust and Go.",
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
      extHomeURL: "https://dlang.org",
      created: "2001",
      isTranspiler: false,
      shortDesc: "D is a modern system programming language influenced by C++ with multiple paradigms and expressive features.",
      githubStars: 3000,
      extGithubPath: "dlang/dmd",
    })
    .relInfluencedBy.add("pl+ada", "pl+basic", "pl+c", "pl+c++", "pl+c-sharp", "pl+eiffel", "pl+java", "pl+python", "pl+ruby")
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
