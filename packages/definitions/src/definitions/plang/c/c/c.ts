import type { PlangsGraph } from "@plangs/plangs/graph";

export function define(g: PlangsGraph) {
  g.plang
    .set("pl+c", {
      name: "C",
      description:
        "C is a general-purpose programming language developed at Bell Labs in the early 1970s, known for its low-level capabilities and is foundational in developing operating systems, system software, and various applications.",
      shortDesc: "C is a general-purpose language foundational in systems and application programming.",
      created: "1972",
      extensions: [".c", ".h"],
      extRedditPath: "C_Programming",
      extWikipediaPath: "C_(programming_language)",
      githubColor: "#555555",
      githubLangId: "41",
      githubName: "C",
      githubPopular: true,
      githubType: "programming",
      isTranspiler: false,
      keywords: ["bell-labs", "c", "general-purpose", "imperative", "procedural", "structured", "systems-programming"],
      languishRanking: 11,
      releases: [
        { version: "C18", name: "Standard C18", date: "2018-06-01" },
        { version: "C11", name: "Standard C11", date: "2011-12-08" },
        { version: "C99", name: "Standard C99", date: "1999-12-01" },
        { version: "C90", name: "Standard C90", date: "1990-03-01" },
        { version: "C89", name: "ANSI C", date: "1989-12-01" },
      ],
      stackovTags: ["c"],
    })
    .relInfluencedBy.add("pl+fortran")
    .relLicenses.add("lic+bsd")
    .relParadigms.add("para+compiled", "para+imperative", "para+multi", "para+procedural", "para+structured")
    .relPlatforms.add("plat+android", "plat+apple", "plat+bsd", "plat+cross", "plat+dos", "plat+embedded", "plat+linux", "plat+windows")
    .relTags.add(
      "tag+app",
      "tag+asm",
      "tag+compiler",
      "tag+embedded",
      "tag+flow",
      "tag+framework",
      "tag+gui",
      "tag+industrial",
      "tag+interpreters",
      "tag+modeling",
      "tag+scripting",
      "tag+shell",
      "tag+testing",
      "tag+viz",
      "tag+wavelet",
    )
    .relTypeSystems.add("tsys+manifest", "tsys+nominal", "tsys+static", "tsys+weak");

  // TOOLS

  // TOOL BUNDLES

  // LIBRARIES

  // APPS
}
