import type { PlangsGraph } from "@plangs/plangs/graph";

export function define(g: PlangsGraph) {
  g.plang
    .set("pl+apl", {
      name: "APL",
      description:
        "APL (named after the book A Programming Language) is a programming language developed in the 1960s by Kenneth E. Iverson. Its central datatype is the multi-dimensional array, and it uses unique symbols to represent functions, allowing for very concise code. APL has influenced many areas including concept modeling and functional programming, and inspired several other languages.",
      keywords: ["apl", "array programming"],
      extensions: [".apl"],
      releases: [
        { version: "1", name: "APL 1", date: "1966-01-01" },
        { version: "2", name: "APL 2", date: "1980-01-01" },
      ],
      stackovTags: ["apl"],
      githubName: "APL",
      languishRanking: 259,
      githubLangId: "6",
      githubColor: "#5A8164",
      githubPopular: false,
      githubType: "programming",
      extWikipediaPath: "APL_(programming_language)",
      extRedditPath: "apljk",
      extHomeURL: "https://aplwiki.com/",
      created: "1966",
      isTranspiler: false,
      shortDesc:
        "APL is a concise programming language focused on multi-dimensional arrays, using unique symbols to represent functions, influencing modeling and functional programming.",
    })
    .relParadigms.add("para+array", "para+functional", "para+modular", "para+structured")
    .relPlatforms.add("plat+cross")
    .relTags.add(
      "tag+3dg",
      "tag+analysis",
      "tag+app",
      "tag+automation",
      "tag+compiler",
      "tag+dbms",
      "tag+editor",
      "tag+embedded",
      "tag+framework",
      "tag+industrial",
      "tag+interpreters",
      "tag+modeling",
      "tag+ray-tracer",
      "tag+server",
      "tag+viz",
      "tag+wavelet",
    )
    .relTypeSystems.add("tsys+dynamic");

  // TOOLS

  // TOOL BUNDLES

  // LIBRARIES

  // APPS
}
