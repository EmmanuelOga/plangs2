import type { PlangsGraph } from "@plangs/plangs";

export function define(g: PlangsGraph) {
  g.nodes.pl
    .set("pl+powerbasic", {
      name: "PowerBASIC",
      description:
        "PowerBASIC, formerly Turbo Basic, is the brand of several commercial compilers by PowerBASIC Inc. that compile a dialect of the BASIC programming language. There are both MS-DOS and Windows versions, and two kinds of the latter: Console and Windows. The MS-DOS version has a syntax similar to that of QBasic and QuickBASIC. The Windows versions use a BASIC syntax expanded to include many Windows functions, and the statements can be combined with calls to the Windows API.",
      keywords: ["basic", "powerbasic"],
      websites: [{ title: "PowerBASIC - Wikipedia", href: "https://en.wikipedia.org/wiki/PowerBASIC", kind: "wikipedia" }],
      extensions: [".bas", ".pb"],
      year: 1989,
      isMainstream: false,
      releases: [{ version: "10.0", name: "", date: "2011-05-04" }],
    })
    .addImplements(["pl+basic"])
    .addLicenses(["license+commercial"])
    .addParadigms(["paradigm+compiled", "paradigm+imperative", "paradigm+oop", "paradigm+procedural", "paradigm+structured"])
    .addPlatforms(["plat+dos", "plat+windows"])
    .addTags(["tag+app", "tag+asm", "tag+cli", "tag+compiler", "tag+editor", "tag+industrial", "tag+interpreter", "tag+testing", "tag+ui"])
    .addTypeSystems(["tsys+static", "tsys+strong"]);

  // TOOLS

  // TOOL BUNDLES

  // LIBRARIES

  // APPS
}
