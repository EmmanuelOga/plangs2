import type { PlangsGraph } from "@plangs/plangs";

export function define(g: PlangsGraph) {
  g.nodes.pl
    .set("pl+g95", {
      name: "G95",
      description:
        "G95 is a free, portable, open-source Fortran 95 compiler. It implements the Fortran 95 standard, part of the Fortran 2003 standard, as well as some old and new extensions including features for the Fortran 2008 standard like coarray Fortran. It also supports the F programming language subset.",
      keywords: ["g95", "fortran"],
      websites: [
        { title: "g95.org", href: "http://g95.org/", kind: "homepage" },
        { title: "G95", href: "https://en.wikipedia.org/wiki/G95", kind: "wikipedia" },
      ],
      extensions: [".f95", ".for", ".f90", ".f"],
      year: 2001,
      isTranspiler: false,
      isMainstream: false,
      releases: [{ version: "0.93", name: "G95 0.93", date: "2012-01-01" }],
    })
    .addImplements(["pl+fortran"])
    .addInfluencedBy(["pl+c", "pl+fortran"])
    .addLicenses(["license+gnu-gpl"])
    .addParadigms(["paradigm+compiled", "paradigm+imperative", "paradigm+procedural"])
    .addPlatforms(["plat+bsd", "plat+linux", "plat+windows"])
    .addTags(["tag+compiler", "tag+interpreter", "tag+sci"])
    .addTypeSystems(["tsys+static", "tsys+strong"])
    .addWrittenIn(["pl+c"]);

  // TOOLS

  // TOOL BUNDLES

  // LIBRARIES

  // APPS
}
