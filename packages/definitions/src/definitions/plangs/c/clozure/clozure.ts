import type { PlangsGraph } from "@plangs/plangs";

export function define(g: PlangsGraph) {
  g.n_plangs
    .set("pl+clozure", {
      name: "Clozure CL",
      description:
        "Clozure CL (CCL) is a Common Lisp implementation. It implements the full ANSI Common Lisp standard with several extensions (CLOS MOP, threads, CLOS conditions, CLOS streams, ...). It contains a command line development environment, an experimental integrated development environment (IDE) for Mac OS X using the Hemlock editor, and can also be used with SLIME (a Common Lisp development environment for GNU Emacs).  Clozure CL is open source and the project is hosted by Clozure Associates.",
      websites: [
        { href: "http://ccl.clozure.com/", title: "ccl.clozure.com", kind: "other" },
        { href: "https://en.wikipedia.org/wiki/Clozure_CL", title: "Clozure CL", kind: "wikipedia" },
      ],
      releases: [{ version: "1.12.2", date: "2023-01-01" }],
    })
    .addImplements(["pl+common-lisp"])
    .addLicenses(["lic+apache", "lic+lgpl"])
    .addPlatforms(["platf+bsd", "platf+cross", "platf+linux", "platf+windows"])
    .addTags(["tag+compiler"]);
}
