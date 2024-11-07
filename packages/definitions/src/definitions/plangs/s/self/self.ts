import type { PlangsGraph } from "@plangs/plangs";

export function define(g: PlangsGraph) {
  g.nodes.pl
    .set("pl+self", {
      name: "Self",
      description:
        "Self is a general-purpose, high-level, object-oriented programming language based on the concept of prototypes. Self began as a dialect of Smalltalk, being dynamically typed and using just-in-time compilation (JIT) with the prototype-based approach to objects: it was first used as an experimental test system for language design in the 1980s and 1990s. In 2006, Self was still being developed as part of the Klein project, which was a Self virtual machine written fully in Self. The latest version, 2017.1 was released in May 2017.",
      keywords: ["self"],
      websites: [
        { title: "Self", href: "http://www.selflanguage.org/", kind: "homepage" },
        { title: "Self", href: "https://en.wikipedia.org/wiki/Self_(programming_language)", kind: "wikipedia" },
      ],
      year: 1987,
      isTranspiler: false,
      isMainstream: false,
      releases: [{ version: "2017.1", date: "2017-01-01" }],
    })
    .addInfluencedBy(["pl+apl"])
    .addLicenses(["license+bsd"])
    .addParadigms(["paradigm+oop", "paradigm+prototype"])
    .addPlatforms(["plat+apple", "plat+cross", "plat+windows"])
    .addTags(["tag+4gl", "tag+app", "tag+compiler", "tag+framework", "tag+industrial", "tag+interpreter", "tag+viz"])
    .addTypeSystems(["tsys+dynamic", "tsys+strong"]);

  // TOOLS

  // TOOL BUNDLES

  // LIBRARIES

  // APPS
}
