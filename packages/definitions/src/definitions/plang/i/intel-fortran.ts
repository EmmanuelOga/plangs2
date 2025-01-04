import type { PlangsGraph } from "@plangs/plangs/graph";

export function define(g: PlangsGraph) {
  g.plang
    .set("pl+intel-fortran", {
      name: "Intel Fortran",
      description:
        "Suite of Fortran compilers from Intel, designed for high-performance computing on Windows, macOS, and Linux platforms. It is part of the Intel OneAPI HPC toolkit, supporting features like optimized CPU and GPU code generation.",
      shortDesc:
        "High-performance computing compiler suite from Intel, supporting multiple platforms.",
      created: "2003",
      extensions: [".f", ".f90", ".f95", ".for"],
      extHomeURL:
        "https://www.intel.com/content/www/us/en/developer/tools/oneapi/fortran-compiler.html",
      extWikipediaPath: "Intel_Fortran_Compiler",
      isTranspiler: false,
      keywords: ["fortran"],
      releases: [
        { version: "2023.2.1", name: "2023.2.1", date: "2023-07-28" },
        { version: "2024.0.0", name: "2024.0.0", date: "2023-11-20" },
      ],
    })
    .relImplements.add("pl+fortran")
    .relLicenses.add("lic+bsd")
    .relParadigms.add("para+compiled", "para+procedural", "para+scientific")
    .relPlatforms.add("plat+apple", "plat+cross", "plat+linux", "plat+windows")
    .relTags.add(
      "tag+3dg",
      "tag+analysis",
      "tag+app",
      "tag+cli",
      "tag+compiler",
      "tag+numeric",
      "tag+sci",
      "tag+shell",
      "tag+viz",
    )
    .relTypeSystems.add("tsys+static", "tsys+strong")
    .relWrittenWith.add("pl+c");
}
