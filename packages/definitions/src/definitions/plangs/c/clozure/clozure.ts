import type { PlangsGraph } from "@plangs/plangs";

export function define(g: PlangsGraph) {
  g.nodes.pl
    .set("pl+clozure", {
      name: "Clozure CL",
      description:
        "Clozure CL (CCL) is a Common Lisp implementation. It implements the full ANSI Common Lisp standard with several extensions including the Common Lisp Object System (CLOS) Metaobject Protocol (MOP), threads, CLOS conditions, and streams. It features a command line development environment, an experimental integrated development environment (IDE) for macOS with the Hemlock editor, and compatibility with SLIME, a Common Lisp environment for GNU Emacs. Clozure CL is open-source and is managed by Clozure Associates.",
      keywords: ["ccl", "clozure", "common lisp"],
      websites: [
        { title: "ccl.clozure.com", href: "http://ccl.clozure.com/", kind: "other" },
        { title: "Clozure CL", href: "https://en.wikipedia.org/wiki/Clozure_CL", kind: "wikipedia" },
      ],
      extensions: [".cl", ".lisp"],
      year: 2000,
      isTranspiler: false,
      isMainstream: false,
      releases: [{ version: "1.12.2", name: "Clozure CL 1.12.2", date: "2023-01-01" }],
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
