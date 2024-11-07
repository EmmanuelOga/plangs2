import type { PlangsGraph } from "@plangs/plangs";

export function define(g: PlangsGraph) {
  g.nodes.pl
    .set("pl+tk", {
      name: "Tk",
      description:
        "Tk is a cross-platform widget toolkit that provides a library of basic elements of GUI widgets for building a graphical user interface (GUI) in many programming languages. It is free and open-source software released under a BSD-style software license.",
      keywords: ["tk", "tcl", "tcl tk", "tcl/tk", "tkinter"],
      websites: [
        { title: "tcl.tk", href: "http://www.tcl.tk/", kind: "homepage" },
        { title: "Tk", href: "https://en.wikipedia.org/wiki/Tk_(software)", kind: "wikipedia" },
      ],
      year: 1991,
      isTranspiler: false,
      isMainstream: true,
      releases: [{ version: "8.6.13", name: "Tk 8.6.13", date: "2022-01-01" }],
    })
    .addInfluencedBy(["pl+tcl"])
    .addLicenses(["license+bsd"])
    .addParadigms(["paradigm+event-driven", "paradigm+scripting"])
    .addPlatforms(["plat+apple", "plat+cross", "plat+linux", "plat+windows"])
    .addTags(["tag+app", "tag+framework", "tag+scripting", "tag+ui"])
    .addTypeSystems(["tsys+untyped"])
    .addWrittenIn(["pl+c"]);

  // TOOLS

  // TOOL BUNDLES

  // LIBRARIES

  // APPS
}
