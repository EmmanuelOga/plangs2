import type { PlangsGraph } from "@plangs/plangs";

export function define(g: PlangsGraph) {
  g.nodes.pl
    .set("pl+c3", {
      name: "c3",
      description:
        "C3 is an modern programming language that enhances the traditional C language with modern features while retaining compatibility with C. It offers full C ABI compatibility, intuitive module system, semantic macros, and improved error handling among other features. It's designed to be an evolution, not a revolution, making it easier for C developers to adapt it in existing projects. The language supports procedural programming paradigms and includes powerful reflection capabilities, enabling robust debugging and development experiences.",
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
    })
    .relInfluencedBy.add(["pl+c"])
    .relLicenses.add(["license+lgpl", "license+mit"])
    .relParadigms.add(["paradigm+compiled", "paradigm+general-purpose", "paradigm+multi", "paradigm+procedural"])
    .relPlatforms.add(["plat+apple", "plat+cross", "plat+linux", "plat+windows"])
    .relTags.add(["tag+compiler", "tag+scripting"])
    .relTsys.add(["tsys+static", "tsys+strong"]);

  // TOOLS

  // TOOL BUNDLES

  // LIBRARIES

  // APPS
}
