import type { PlangsGraph } from "@plangs/plangs";

export function define(g: PlangsGraph) {
  g.nodes.pl
    .set("pl+c3", {
      name: "c3",
      description:
        "C3 is an modern programming language that enhances the traditional C language with modern features while retaining compatibility with C. It offers full C ABI compatibility, intuitive module system, semantic macros, and improved error handling among other features. It's designed to be an evolution, not a revolution, making it easier for C developers to adapt it in existing projects. The language supports procedural programming paradigms and includes powerful reflection capabilities, enabling robust debugging and development experiences.",
      keywords: ["c-language", "c3", "programming", "system"],
      websites: [
        { title: "C3", href: "https://c3-lang.org", kind: "homepage" },
        { title: "C3", href: "https://github.com/c3lang/c3c", kind: "repository" },
      ],
      extensions: [".c3"],
      year: 2019,
      releases: [
        { version: "0.6.4", name: "Current Stable Version", date: "2024-09-08" },
        { version: "0.1.0", name: "C3 Initial Release", date: "2020-05-01" },
      ],
      isMainstream: false,
      isTranspiler: true,
    })
    .addInfluencedBy(["pl+c"])
    .addLicenses(["license+lgpl", "license+mit"])
    .addParadigms(["paradigm+compiled", "paradigm+general-purpose", "paradigm+multi", "paradigm+procedural"])
    .addPlatforms(["plat+apple", "plat+cross", "plat+linux", "plat+windows"])
    .addTags(["tag+compiler", "tag+scripting"])
    .addTypeSystems(["tsys+static", "tsys+strong"]);

  // TOOLS

  // TOOL BUNDLES

  // LIBRARIES

  // APPS
}
