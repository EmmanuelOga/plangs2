import type { PlangsGraph } from "@plangs/plangs";

export function define(g: PlangsGraph) {
  g.nodes.pl
    .set("pl+clozure", {
      name: "Clozure CL",
      description:
        "Clozure CL (often called CCL for short) is a free Common Lisp implementation with a long history. It implements the full ANSI Common Lisp standard with several extensions including CLOS MOP, threads, CLOS conditions, and streams. It features a command line development environment and an experimental integrated development environment (IDE) for macOS using the Hemlock editor. CCL offers fast compilation speed, native threads, and a precise, generational, compacting garbage collector. It is open-source, hosted by Clozure Associates, and widely used in software applications such as ITA Software's Airline Reservation System.",
      keywords: ["ccl", "clozure", "common lisp"],
      extensions: [".cl", ".lisp"],
      year: 2000,
      isMainstream: false,
      releases: [{ version: "1.12.2", name: "Clozure CL 1.12.2", date: "2023-08-08" }],
      extWikipediaPath: "Clozure_CL",
      extHomeURL: "http://ccl.clozure.com/",
    })
    .addImplements(["pl+common-lisp"])
    .addLicenses(["license+apache", "license+lgpl"])
    .addParadigms(["paradigm+functional", "paradigm+multi", "paradigm+oop"])
    .addPlatforms(["plat+apple", "plat+bsd", "plat+cross", "plat+linux", "plat+windows"])
    .addTags(["tag+compiler", "tag+editor"])
    .addTypeSystems(["tsys+dynamic"])
    .addWrittenIn(["pl+c"]);

  // TOOLS

  // TOOL BUNDLES

  // LIBRARIES

  // APPS
}
