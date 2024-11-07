import type { PlangsGraph } from "@plangs/plangs";

export function define(g: PlangsGraph) {
  g.nodes.pl
    .set("pl+dylan", {
      name: "Dylan",
      description:
        "Dylan is a multi-paradigm programming language that includes support for functional and object-oriented programming (OOP), and is dynamic and reflective while providing a programming model designed to support generating efficient machine code, including fine-grained control over dynamic and static behaviors. It was created in the early 1990s by a group led by Apple Computer.",
      keywords: ["dylan"],
      websites: [
        { title: "opendylan.org", href: "https://opendylan.org/", kind: "homepage" },
        { title: "Dylan", href: "https://en.wikipedia.org/wiki/Dylan_(programming_language)", kind: "wikipedia" },
      ],
      year: 1992,
      isTranspiler: false,
      isMainstream: false,
      releases: [{ version: "2022.1", name: "", date: "2022-01-01" }],
    })
    .addInfluencedBy(["pl+algol", "pl+common-lisp", "pl+lisp", "pl+r5rs", "pl+scheme"])
    .addLicenses(["license+mit"])
    .addParadigms(["paradigm+functional", "paradigm+multi", "paradigm+oop"])
    .addPlatforms(["plat+cross", "plat+x86-64"])
    .addTags(["tag+compiler", "tag+industrial", "tag+interpreter", "tag+testing"])
    .addTypeSystems(["tsys+dynamic", "tsys+static"])
    .addWrittenIn(["pl+c"]);

  // TOOLS

  // TOOL BUNDLES

  // LIBRARIES

  // APPS
}
