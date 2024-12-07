import type { PlangsGraph } from "@plangs/plangs/graph";

export function define(g: PlangsGraph) {
  g.plang
    .set("pl+c", {
      name: "C",
      description:
        "C (pronounced like the letter C) is a general-purpose programming language developed in the early 1970s by Dennis Ritchie at Bell Labs. It has become one of the most influential programming languages, foundational in developing operating systems, system software, and various applications. C's design reflects the capabilities of targeted CPUs and is especially prevalent in systems programming, including operating system kernels, device drivers, and protocol stacks. It is portable and commonly used across computer architectures, from supercomputers to microcontrollers.",
      keywords: ["c", "general-purpose", "imperative", "procedural", "structured", "systems programming"],
      extensions: [".c", ".h"],
      releases: [
        { version: "C18", name: "Standard C18", date: "2018-06-01" },
        { version: "C11", name: "Standard C11", date: "2011-12-08" },
        { version: "C99", name: "Standard C99", date: "1999-12-01" },
        { version: "C90", name: "Standard C90", date: "1990-03-01" },
        { version: "C89", name: "ANSI C", date: "1989-12-01" },
      ],
      stackovTags: ["c"],
      githubName: "C",
      languishRanking: 11,
      githubLangId: "41",
      githubColor: "#555555",
      githubPopular: true,
      githubType: "programming",
      extWikipediaPath: "C_(programming_language)",
      extRedditPath: "C_Programming",
      extHomeURL: "https://www.open-std.org/jtc1/sc22/wg14/",
      created: "1972",
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
      "tag+industrial",
      "tag+interpreters",
      "tag+modeling",
      "tag+scripting",
      "tag+shell",
      "tag+testing",
      "tag+gui",
      "tag+viz",
      "tag+wavelet",
    )
    .relTypeSystems.add("tsys+manifest", "tsys+nominal", "tsys+static", "tsys+weak");

  // TOOLS

  // TOOL BUNDLES

  // LIBRARIES

  // APPS
}
