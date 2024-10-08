import type { PlangsGraph } from "@plangs/plangs";

export function define(g: PlangsGraph) {
  g.nodes.pl
    .set("pl+purebasic", {
      name: "PureBasic",
      description:
        "PureBasic is a commercially distributed procedural computer programming language and integrated development environment based on BASIC and developed by Fantaisie Software for Windows, Linux, and macOS. An Amiga version is available, although it has been discontinued and some parts of it are released as open-source. The first public release of PureBasic for Windows was on 17 December 2000. It has been continually updated ever since.",
      keywords: ["purebasic"],
      websites: [
        { title: "www.purebasic.com", href: "http://www.purebasic.com/", kind: "homepage" },
        { title: "PureBasic", href: "https://en.wikipedia.org/wiki/PureBasic", kind: "wikipedia" },
      ],
      extensions: [".pb", ".pbf", ".pbi", ".pbp"],
      firstAppeared: "1998-01-01",
      isTranspiler: false,
      isMainstream: false,
      releases: [{ version: "6.11", date: "2024-01-01" }],
    })
    .addDialectOf(["pl+basic"])
    .addParadigms(["paradigm+imperative", "paradigm+procedural", "paradigm+structured"])
    .addPlatforms(["plat+apple", "plat+linux", "plat+raspberry", "plat+windows"])
    .addTags(["tag+app", "tag+asm", "tag+compiler", "tag+editor", "tag+games", "tag+interpreter", "tag+ui"]);
}
