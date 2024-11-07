import type { PlangsGraph } from "@plangs/plangs";

export function define(g: PlangsGraph) {
  g.nodes.pl
    .set("pl+high-level-assembly", {
      name: "High Level Assembly",
      description:
        "High-Level Assembly (HLA) is a language developed by Randall Hyde that allows the use of higher-level language constructs to aid both beginners and advanced assembly developers. It supports advanced data types and object-oriented programming. It uses a syntax loosely based on several high-level programming languages (HLLs), such as Pascal, Ada, Modula-2, and C++, to allow the creation of readable assembly language programs, and to allow HLL programmers to learn HLA as fast as possible.",
      keywords: ["high level assembly", "hla", "randall hyde"],
      websites: [
        { title: "plantation-productions.com/Webster", href: "http://plantation-productions.com/Webster", kind: "other" },
        { title: "High Level Assembly", href: "https://en.wikipedia.org/wiki/High_Level_Assembly", kind: "wikipedia" },
      ],
      extensions: [".hla"],
      year: 2003,
      isTranspiler: false,
      isMainstream: false,
      releases: [{ version: "2.16", name: "HLA 2.16", date: "2011-01-01" }],
    })
    .addInfluencedBy(["pl+ada", "pl+c++", "pl+modula-2", "pl+pascal"])
    .addLicenses(["license+public-domain"])
    .addParadigms(["paradigm+assembly", "paradigm+oop"])
    .addPlatforms(["plat+apple", "plat+bsd", "plat+linux", "plat+windows"])
    .addTags(["tag+4gl", "tag+app", "tag+asm", "tag+compiler", "tag+industrial", "tag+interpreter", "tag+shell", "tag+viz"])
    .addTypeSystems(["tsys+strong"])
    .addWrittenIn(["pl+assembly"]);

  // TOOLS

  // TOOL BUNDLES

  // LIBRARIES

  // APPS
}
