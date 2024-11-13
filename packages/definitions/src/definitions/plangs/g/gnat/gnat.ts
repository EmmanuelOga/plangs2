import type { PlangsGraph } from "@plangs/plangs";

export function define(g: PlangsGraph) {
  g.nodes.pl
    .set("pl+gnat", {
      name: "GNAT",
      description:
        "GNAT is a free-software compiler for the Ada programming language that forms part of the GNU Compiler Collection (GCC). It supports all versions of Ada. Originally named as an acronym for GNU NYU Ada Translator, GNAT is developed by NYU, AdaCore, and the GNU Project. It includes a rich set of tools and libraries to support evolving project needs.",
      keywords: ["ada", "compiler", "gcc", "gnat"],
      websites: [
        { title: "Get Ada Now", href: "http://www.getadanow.com/", kind: "homepage" },
        { title: "GNAT Pro | AdaCore", href: "http://www.adacore.com/gnatpro/", kind: "other" },
        { title: "GNAT - Wikipedia", href: "https://en.wikipedia.org/wiki/GNAT", kind: "wikipedia" },
      ],
      extensions: [".adb", ".ads"],
      year: 1995,
      isMainstream: true,
      releases: [
        { version: "14.1", name: "FSF GNAT 14.1", date: "2024-05-07" },
        { version: "GNAT Pro 24", name: "GNAT Pro 24", date: "2024" },
      ],
      images: [{ kind: "logo", title: "FSF Gnat Logo", url: "http://www.getadanow.com/ada-gfx/gnatlogo.png", width: 300, height: 150 }],
    })
    .addImplements(["pl+ada"])
    .addLicenses(["license+gnu-gpl"])
    .addParadigms(["paradigm+compiled", "paradigm+concurrent", "paradigm+procedural", "paradigm+structured"])
    .addPlatforms(["plat+bsd", "plat+cross", "plat+linux", "plat+windows"])
    .addTags(["tag+compiler", "tag+framework", "tag+interpreter"])
    .addTypeSystems(["tsys+nominal", "tsys+static", "tsys+strong"]);

  // TOOLS

  // TOOL BUNDLES

  // LIBRARIES

  // APPS
}
