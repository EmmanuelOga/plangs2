import type { PlangsGraph } from "@plangs/plangs";

export function define(g: PlangsGraph) {
  g.nodes.pl
    .set("pl+intel-fortran-compiler", {
      name: "Intel Fortran Compiler",
      description:
        "Intel Fortran Compiler, as part of Intel OneAPI HPC toolkit, is a suite of Fortran compilers from Intel for Windows, macOS, and Linux, providing high-performance computing capabilities.",
      keywords: ["fortran"],
      websites: [
        {
          title: "Intel Fortran Compiler - Intel Software",
          href: "http://software.intel.com/content/www/us/en/develop/tools/oneapi/components/fortran-compiler.html",
          kind: "homepage",
        },
        { title: "Intel Fortran Compiler", href: "https://en.wikipedia.org/wiki/Intel_Fortran_Compiler", kind: "wikipedia" },
      ],
      extensions: [".f", " .for", " .f90", " .f95"],
      firstAppeared: "2003-01-01",
      isTranspiler: false,
      isMainstream: true,
      releases: [{ version: "2023.2.1", name: "2023.2.1", date: "2023-01-01" }],
    })
    .addImplements(["pl+fortran"])
    .addLicenses(["license+bsd"])
    .addParadigms(["paradigm+compiled", "paradigm+procedural", "paradigm+scientific"])
    .addPlatforms(["plat+apple", "plat+cross", "plat+linux", "plat+windows"])
    .addTags(["tag+3dg", "tag+analysis", "tag+app", "tag+cli", "tag+compiler", "tag+sci", "tag+shell", "tag+viz"])
    .addTypeSystems(["tsys+static", "tsys+strong"])
    .addWrittenIn(["pl+c"]);
}
