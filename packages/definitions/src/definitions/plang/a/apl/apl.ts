import type { PlangsGraph } from "@plangs/plangs/graph";

export function define(g: PlangsGraph) {
  g.plang
    .set("pl+apl", {
      name: "APL",
      description:
        "APL (named after the book A Programming Language) is a programming language developed in the 1960s by Kenneth E. Iverson. Its central datatype is the multidimensional array. It uses a large range of special graphic symbols to represent most functions and operators, leading to very concise code. It has been an important influence on the development of concept modeling, spreadsheets, functional programming, and computer math packages. It has also inspired several other programming languages.",
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
