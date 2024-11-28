import type { PlangsGraph } from "@plangs/plangs/graph";

export function define(g: PlangsGraph) {
  g.plang
    .set("pl+clozure", {
      name: "Clozure CL",
      description:
        "Clozure CL (often called CCL for short) is a free Common Lisp implementation with a long history. It implements the full ANSI Common Lisp standard with several extensions including CLOS MOP, threads, CLOS conditions, and streams. It features a command line development environment and an experimental integrated development environment (IDE) for macOS using the Hemlock editor. CCL offers fast compilation speed, native threads, and a precise, generational, compacting garbage collector. It is open-source, hosted by Clozure Associates, and widely used in software applications such as ITA Software's Airline Reservation System.",
      keywords: ["ccl", "clozure", "common lisp"],
      extensions: [".cl", ".lisp"],
      releases: [{ version: "1.12.2", name: "Clozure CL 1.12.2", date: "2023-08-08" }],
      extWikipediaPath: "Clozure_CL",
      extHomeURL: "http://ccl.clozure.com/",
      created: "2000",
    })
    .relImplements.add("pl+common-lisp")
    .relLicenses.add("lic+apache", "lic+lgpl")
    .relParadigms.add("para+functional", "para+multi", "para+oop")
    .relPlatforms.add("plat+apple", "plat+bsd", "plat+cross", "plat+linux", "plat+windows")
    .relTags.add("tag+compiler", "tag+editor")
    .relTypeSystems.add("tsys+dynamic")
    .relWrittenWith.add("pl+c");

  // TOOLS

  // TOOL BUNDLES

  // LIBRARIES

  // APPS
}
