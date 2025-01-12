import type { PlangsGraph } from "@plangs/plangs/graph";

export function define(g: PlangsGraph) {
  g.plang
    .set("pl+d", {
      name: "D",
      description:
        "System programming language created by Walter Bright at Digital Mars and later joined by Andrei Alexandrescu, offering a unique blend of efficiency and expressiveness inspired by C++ but standing distinct from it. It incorporates multiple programming paradigms and features an innovative type system, appealing to programmers looking for modernized C++ alternatives. D is influenced by languages such as Java, Python, and C#, and it has, in turn, influenced newer languages like Rust and Go.",
      shortDesc:
        "Modern system programming language influenced by C++ with multiple paradigms and expressive features.",
      created: "2001",
      extensions: [".d"],
      extGithubPath: "dlang/dmd",
      extHomeURL: "https://dlang.org",
      extRedditPath: "d_language",
      extWikipediaPath: "D_(programming_language)",
      githubColor: "#ba595e",
      githubLangId: "80",
      githubName: "D",
      githubPopular: false,
      githubStars: 3000,
      githubType: "programming",
      isTranspiler: false,
      keywords: ["d language", "d programming", "dlang"],
      languishRanking: 147,
      releases: [
        { version: "2.109.1", name: "Stable Release", date: "2024-07-01" },
      ],
      stackovTags: ["d"],
    })
    .relImplements.add("pl+c")
    .relInfluencedBy.add(
      "pl+ada",
      "pl+basic",
      "pl+c",
      "pl+c++",
      "pl+c-sharp",
      "pl+eiffel",
      "pl+java",
      "pl+python",
      "pl+ruby",
    )
    .relLicenses.add("lic+boost")
    .relParadigms.add(
      "para+concurrent",
      "para+functional",
      "para+general-purpose",
      "para+imperative",
      "para+metaprogramming",
      "para+multi",
      "para+oop",
    )
    .relPlatforms.add("plat+apple", "plat+bsd", "plat+linux", "plat+windows")
    .relTags.add(
      "tag+analysis",
      "tag+app",
      "tag+asm",
      "tag+better-c",
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
    .relTypeSystems.add(
      "tsys+inferred",
      "tsys+object",
      "tsys+static",
      "tsys+strong",
    );
}
