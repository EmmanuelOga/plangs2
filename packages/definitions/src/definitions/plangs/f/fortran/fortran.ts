import type { PlangsGraph } from "@plangs/plangs";

export function define(g: PlangsGraph) {
  g.nodes.pl
    .set("pl+fortran", {
      name: "Fortran",
      description:
        "Fortran (/ˈfɔːrtræn/; formerly FORTRAN) is a third generation, compiled, imperative programming language that is especially suited to numeric computation and scientific computing. It was originally developed by IBM in the 1950s for scientific and engineering applications.",
      keywords: ["fortran"],
      websites: [
        { title: "fortran-lang.org", href: "https://fortran-lang.org/", kind: "homepage" },
        { title: "Fortran", href: "https://en.wikipedia.org/wiki/Fortran", kind: "wikipedia" },
      ],
      extensions: [".f", ".f90", ".for"],
      year: 1957,
      isTranspiler: false,
      isMainstream: true,
      releases: [
        { version: "IV", name: "FORTRAN IV", date: "1962-01-01" },
        { version: "77", name: "FORTRAN 77", date: "1978-01-01" },
        { version: "90", name: "Fortran 90", date: "1991-01-01" },
        { version: "95", name: "Fortran 95", date: "1997-01-01" },
        { version: "2003", name: "Fortran 2003", date: "2004-01-01" },
        { version: "2008", name: "Fortran 2008", date: "2010-01-01" },
        { version: "2018", name: "Fortran 2018", date: "2018-01-01" },
      ],
    })
    .addParadigms(["paradigm+array", "paradigm+imperative", "paradigm+multi", "paradigm+oop", "paradigm+procedural", "paradigm+structured"])
    .addPlatforms(["plat+cross", "plat+linux", "plat+windows"])
    .addTags([
      "tag+analysis",
      "tag+app",
      "tag+asm",
      "tag+compiler",
      "tag+dsp",
      "tag+framework",
      "tag+industrial",
      "tag+interpreter",
      "tag+modeling",
      "tag+multivar",
      "tag+numeric",
      "tag+ray-tracer",
      "tag+sci",
      "tag+scripting",
      "tag+stats",
      "tag+testing",
      "tag+viz",
    ])
    .addTypeSystems(["tsys+manifest", "tsys+static", "tsys+strong"]);
}
