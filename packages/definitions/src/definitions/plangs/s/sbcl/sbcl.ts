import type { PlangsGraph } from "@plangs/plangs";

export function define(g: PlangsGraph) {
  g.nodes.pl
    .set("pl+sbcl", {
      name: "SBCL",
      description:
        "Steel Bank Common Lisp (SBCL) is a free Common Lisp implementation that features a high-performance native compiler, Unicode support, and threading. It is open source software, with a permissive license. In addition to the compiler and runtime system for ANSI Common Lisp, it provides an interactive environment including a debugger, a statistical profiler, a code coverage tool, and many other extensions.",
      keywords: ["sbcl", "steel bank", "common lisp"],
      websites: [
        { title: "www.sbcl.org", href: "http://www.sbcl.org/", kind: "homepage" },
        { title: "SBCL", href: "https://en.wikipedia.org/wiki/SBCL", kind: "wikipedia" },
      ],
      firstAppeared: "1999-12-01",
      isTranspiler: false,
      isMainstream: true,
      releases: [{ version: "2.4.5", name: "SBCL 2.4.5", date: "2024-01-01" }],
    })
    .addDialectOf(["pl+common-lisp"])
    .addInfluencedBy(["pl+common-lisp"])
    .addLicenses(["license+bsd", "license+mit", "license+public-domain"])
    .addParadigms(["paradigm+functional", "paradigm+multi", "paradigm+oop", "paradigm+procedural"])
    .addPlatforms(["plat+bsd", "plat+cross", "plat+linux", "plat+windows"])
    .addTags(["tag+compiler", "tag+interpreter"])
    .addTypeSystems(["tsys+dynamic", "tsys+strong"])
    .addWrittenIn(["pl+c"]);
}
