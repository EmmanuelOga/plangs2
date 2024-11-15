import type { PlangsGraph } from "@plangs/plangs";

export function define(g: PlangsGraph) {
  g.nodes.pl
    .set("pl+g95", {
      name: "G95",
      description:
        "G95 is a free, portable, open-source Fortran 95 compiler. It implements the Fortran 95 standard, part of the Fortran 2003 standard, as well as some old and new extensions including features for the Fortran 2008 standard like coarray Fortran. It also supports the F programming language subset. Initially released in 2000, its last stable version was available in 2012, and the development stopped in 2013.",
      keywords: ["fortran", "g95"],
      extensions: [".f", ".f90", ".f95", ".for"],
      year: 2000,
      isMainstream: false,
      releases: [{ version: "0.93", name: "Final release", date: "2012-10-01" }],
      extWikipediaPath: "G95",
      extHomeURL: "http://g95.org/",
    })
    .addImplements(["pl+fortran"])
    .addInfluencedBy(["pl+c", "pl+fortran"])
    .addLicenses(["license+gnu-gpl"])
    .addParadigms(["paradigm+compiled", "paradigm+imperative", "paradigm+procedural"])
    .addPlatforms(["plat+bsd", "plat+cross", "plat+linux", "plat+windows"])
    .addTags(["tag+compiler", "tag+interpreter", "tag+sci"])
    .addTypeSystems(["tsys+static", "tsys+strong"])
    .addWrittenIn(["pl+c"]);

  // TOOLS

  // TOOL BUNDLES

  // LIBRARIES

  // APPS
}
