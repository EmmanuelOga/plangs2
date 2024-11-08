import type { PlangsGraph } from "@plangs/plangs";

export function define(g: PlangsGraph) {
  g.nodes.pl
    .set("pl+squeak", {
      name: "Squeak",
      description:
        "Squeak is an object-oriented, class-based, and reflective programming language known for its portability across multiple platforms. Derived from Smalltalk-80, it was initially created by a team of developers at Apple Computer, and has since been supported by Disney Imagineering, HP Labs, and SAP. Squeak is notable for its educational use in environments like Scratch, and serves as a powerful environment for research and development across domains.",
      keywords: ["squeak"],
      websites: [
        { title: "Squeak", href: "http://www.squeak.org/", kind: "homepage" },
        { title: "Squeak", href: "https://en.wikipedia.org/wiki/Squeak", kind: "wikipedia" },
        { title: "Squeak on Reddit", kind: "reddit", href: "https://reddit.com/r/smalltalk" },
        { title: "Squeak on Wikipedia", kind: "wikipedia", href: "https://en.wikipedia.org/wiki/Smalltalk" },
      ],
      extensions: [".changes", ".image", ".sources", ".st"],
      year: 1996,
      isTranspiler: false,
      isMainstream: false,
      releases: [
        { version: "5.3", name: "Squeak 5.3", date: "2020-12-01" },
        { version: "6.0", name: "Squeak 6.0", date: "2022-05-01" },
      ],
      github: { name: "Smalltalk", langId: "352", color: "#596706", popular: false, type: "programming" },
      stackovTags: ["smalltalk"],
    })
    .addDialectOf(["pl+smalltalk"])
    .addInfluencedBy(["pl+lisp", "pl+self", "pl+smalltalk"])
    .addLicenses(["license+apache", "license+mit"])
    .addParadigms(["paradigm+educational", "paradigm+interpreted", "paradigm+oop", "paradigm+reflective"])
    .addPlatforms(["plat+apple", "plat+cross", "plat+linux", "plat+windows"])
    .addTags(["tag+edu", "tag+interpreter"])
    .addTypeSystems(["tsys+dynamic"]);

  // TOOLS

  // TOOL BUNDLES

  // LIBRARIES

  // APPS
}
