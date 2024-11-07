import type { PlangsGraph } from "@plangs/plangs";

export function define(g: PlangsGraph) {
  g.nodes.pl
    .set("pl+turbo-pascal", {
      name: "Turbo Pascal",
      description:
        "Turbo Pascal is a software development system that includes a compiler and an integrated development environment (IDE) for the programming language Pascal running on the operating systems CP/M, CP/M-86, and DOS. It was originally developed by Anders Hejlsberg at Borland, and was notable for its very fast compiling. Turbo Pascal, and the later but similar Turbo C, made Borland a leader in PC-based development tools.",
      keywords: ["turbo pascal"],
      websites: [{ title: "Turbo Pascal", href: "https://en.wikipedia.org/wiki/Turbo_Pascal", kind: "wikipedia" }],
      extensions: [".pas", ".tp"],
      year: 1983,
      isTranspiler: false,
      isMainstream: false,
      releases: [
        { version: "1.0", name: "Turbo Pascal 1.0", date: "1983-11-01" },
        { version: "3.0", name: "Turbo Pascal 3.0", date: "1985-01-01" },
        { version: "7.0", name: "Turbo Pascal 7.0", date: "1992-08-27" },
      ],
    })
    .addDialectOf(["pl+pascal"])
    .addInfluencedBy(["pl+algol", "pl+pascal"])
    .addParadigms(["paradigm+compiled", "paradigm+procedural", "paradigm+structured"])
    .addPlatforms(["plat+dos", "plat+windows"])
    .addTags(["tag+app", "tag+compiler", "tag+rad", "tag+ui"])
    .addTypeSystems(["tsys+static", "tsys+strong"]);

  // TOOLS

  // TOOL BUNDLES

  // LIBRARIES

  // APPS
}
