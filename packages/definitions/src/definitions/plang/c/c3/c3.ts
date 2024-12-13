import type { PlangsGraph } from "@plangs/plangs/graph";

export function define(g: PlangsGraph) {
  g.plang
    .set("pl+c3", {
      name: "c3",
      description:
        "C3 is a modern programming language that enhances the traditional C language with modern features while retaining compatibility with C. It offers full C ABI compatibility, intuitive module system, semantic macros, and improved error handling among other features. It's designed to be an evolution, not a revolution, making it easier for C developers to adapt it in existing projects. The language supports procedural programming paradigms and includes powerful reflection capabilities, enabling robust debugging and development experiences.",
      keywords: ["c-language", "c3", "programming", "system"],
      extensions: [".c3"],
      releases: [
        { version: "0.6.4", name: "Current Stable Version", date: "2024-09-08" },
        { version: "0.1.0", name: "C3 Initial Release", date: "2020-05-01" },
      ],
      isTranspiler: true,
      extGithubPath: "c3lang/c3c",
      extHomeURL: "https://c3-lang.org",
      created: "2019",
      shortDesc: "C3 is a modern enhancement of C with module systems, semantic macros, and improved error handling, maintaining C compatibility.",
      githubStars: 3100,
    })
    .relInfluencedBy.add("pl+c")
    .relLicenses.add("lic+lgpl", "lic+mit")
    .relParadigms.add("para+compiled", "para+general-purpose", "para+multi", "para+procedural")
    .relPlatforms.add("plat+apple", "plat+cross", "plat+linux", "plat+windows")
    .relTags.add("tag+compiler", "tag+scripting")
    .relTypeSystems.add("tsys+static", "tsys+strong")
    .relWrittenWith.add("pl+c");

  // TOOLS

  // TOOL BUNDLES

  // LIBRARIES

  // APPS
}
