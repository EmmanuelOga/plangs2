import type { PlangsGraph } from "@plangs/plangs/graph";

export function define(g: PlangsGraph) {
  g.plang
    .set("pl+apl", {
      name: "APL",
      description:
        "Developed in the 1960s by Kenneth E. Iverson. Its central datatype is the multi-dimensional array, and it uses unique symbols to represent functions, allowing for very concise code. APL has influenced many areas including concept modeling and functional programming, and inspired several other languages.",
      shortDesc:
        "A concise programming language focused on multi-dimensional arrays, using unique symbols to represent functions, influencing modeling and functional programming.",
      created: "1966",
      extensions: [".apl"],
      extHomeURL: "https://aplwiki.com/",
      extRedditPath: "apljk",
      extWikipediaPath: "APL_(programming_language)",
      githubColor: "#5A8164",
      githubLangId: "6",
      githubName: "APL",
      githubPopular: false,
      githubType: "programming",
      isTranspiler: false,
      keywords: ["apl", "array programming"],
      languishRanking: 259,
      releases: [
        { version: "1", name: "APL 1", date: "1966-01-01" },
        { version: "2", name: "APL 2", date: "1980-01-01" },
      ],
      stackovTags: ["apl"],
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
}
