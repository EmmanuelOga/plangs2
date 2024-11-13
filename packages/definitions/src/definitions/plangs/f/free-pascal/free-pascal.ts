import type { PlangsGraph } from "@plangs/plangs";

export function define(g: PlangsGraph) {
  g.nodes.pl
    .set("pl+free-pascal", {
      name: "Free Pascal",
      description:
        "Free Pascal Compiler (FPC) is a compiler for the closely related programming-language dialects Pascal and Object Pascal. It is free software released under the GNU General Public License, with exception clauses that allow static linking against its runtime libraries and packages for any purpose in combination with any other software license.",
      keywords: ["freepascal", "objectpascal", "pascal"],
      websites: [
        { title: "www.freepascal.org", href: "http://www.freepascal.org/", kind: "homepage" },
        { title: "Free Pascal", href: "https://en.wikipedia.org/wiki/Free_Pascal", kind: "wikipedia" },
      ],
      extensions: [".p", ".pas", ".pp"],
      year: 1993,
      isTranspiler: false,
      isMainstream: false,
      releases: [
        { version: "3.2.2", name: "Free Pascal 3.2.2", date: "2021-01-01" },
        { version: "3.3.1", name: "Free Pascal 3.3.1", date: "2023-01-01" },
      ],
    })
    .addImplements(["pl+pascal"])
    .addInfluencedBy(["pl+pascal"])
    .addLicenses(["license+gnu-gpl"])
    .addParadigms(["paradigm+compiled", "paradigm+multi", "paradigm+oop", "paradigm+procedural", "paradigm+structured"])
    .addPlatforms(["plat+cross", "plat+embedded"])
    .addTags(["tag+compiler", "tag+industrial", "tag+ui"])
    .addTypeSystems(["tsys+object", "tsys+static", "tsys+strong"])
    .addWrittenIn(["pl+pascal"]);

  // TOOLS

  // TOOL BUNDLES

  // LIBRARIES

  // APPS
}
