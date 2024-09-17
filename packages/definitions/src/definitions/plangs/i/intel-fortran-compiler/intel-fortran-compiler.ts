import type { PlangsGraph } from "@plangs/plangs";

export function define(g: PlangsGraph) {
  g.nodes.pl
    .set("pl+intel-fortran-compiler", {
      name: "Intel Fortran Compiler",
      description:
        "Intel Fortran Compiler, as part of Intel OneAPI HPC toolkit, is a group of Fortran compilers from Intel for Windows, macOS, and Linux.",
      websites: [
        {
          href: "http://software.intel.com/content/www/us/en/develop/tools/oneapi/components/fortran-compiler.html",
          title: "software.intel.com/content/www/us/en/develop/tools/oneapi/components/fortran-compiler.html",
          kind: "other",
        },
        { href: "https://en.wikipedia.org/wiki/Intel_Fortran_Compiler", title: "Intel Fortran Compiler", kind: "wikipedia" },
      ],
      releases: [{ version: "2023.2.1", date: "2023-01-01" }],
    })
    .addImplements(["pl+fortran"])
    .addPlatforms(["plat+linux", "plat+windows"])
    .addTags(["tag+3dg", "tag+analysis", "tag+app", "tag+cli", "tag+compiler", "tag+shell", "tag+ui", "tag+viz"]);
}
