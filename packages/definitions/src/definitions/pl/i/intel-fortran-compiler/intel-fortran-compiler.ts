import type { PlangsGraph } from "@plangs/plangs";

export function define(g: PlangsGraph) {
  g.nodes.pl
    .set("pl+intel-fortran-compiler", {
      name: "Intel Fortran Compiler",
      description:
        "Intel Fortran Compiler is a suite of Fortran compilers from Intel, designed for high-performance computing on Windows, macOS, and Linux platforms. It is part of the Intel OneAPI HPC toolkit, supporting features like optimized CPU and GPU code generation.",
      keywords: ["compiler", "fortran", "high-performance computing", "intel"],
      extensions: [".f", ".f90", ".f95", ".for"],
      releases: [
        { version: "2023.2.1", name: "2023.2.1", date: "2023-07-28" },
        { version: "2024.0.0", name: "2024.0.0", date: "2023-11-20" },
      ],
      extWikipediaPath: "Intel_Fortran_Compiler",
      extHomeURL: "http://software.intel.com/content/www/us/en/develop/tools/oneapi/components/fortran-compiler.html",
      created: "2003",
    })
    .addImplements(["pl+fortran"])
    .addLicenses(["license+bsd"])
    .addParadigms(["paradigm+compiled", "paradigm+procedural", "paradigm+scientific"])
    .addPlatforms(["plat+apple", "plat+cross", "plat+linux", "plat+windows"])
    .addTags(["tag+3dg", "tag+analysis", "tag+app", "tag+cli", "tag+compiler", "tag+sci", "tag+shell", "tag+viz"])
    .addTypeSystems(["tsys+static", "tsys+strong"])
    .addWrittenIn(["pl+c"]);

  // TOOLS

  // TOOL BUNDLES

  // LIBRARIES

  // APPS
}
