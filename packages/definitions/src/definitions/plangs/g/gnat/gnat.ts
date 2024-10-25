import type { PlangsGraph } from "@plangs/plangs";

export function define(g: PlangsGraph) {
  g.nodes.pl
    .set("pl+gnat", {
      name: "GNAT",
      description:
        "GNAT is a free-software compiler for the Ada programming language which forms part of the GNU Compiler Collection (GCC). It supports all versions of the language, i.e. Ada 2012, Ada 2005, Ada 95, and Ada 83. Originally its name was an acronym that stood for GNU NYU Ada Translator, but that name no longer applies. The front-end and run-time are written in Ada.",
      keywords: ["gnat", "ada"],
      websites: [
        { title: "Get Ada Now", href: "http://www.getadanow.com/", kind: "homepage" },
        { title: "AdaCore GNAT Pro", href: "http://www.adacore.com/gnatpro/", kind: "other" },
        { title: "GNAT", href: "https://en.wikipedia.org/wiki/GNAT", kind: "wikipedia" },
      ],
      extensions: [".adb", ".ads"],
      year: 1993,
      isTranspiler: false,
      isMainstream: true,
      releases: [{ version: "14.1", name: "GNAT 14.1", date: "2024-05-07" }],
    })
    .addImplements(["pl+ada"])
    .addLicenses(["license+gnu-gpl"])
    .addParadigms(["paradigm+compiled", "paradigm+concurrent", "paradigm+procedural", "paradigm+structured"])
    .addPlatforms(["plat+bsd", "plat+cross", "plat+linux", "plat+windows"])
    .addTags(["tag+compiler", "tag+framework", "tag+interpreter"])
    .addTypeSystems(["tsys+nominal", "tsys+static", "tsys+strong"]);
}
