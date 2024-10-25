import type { PlangsGraph } from "@plangs/plangs";

export function define(g: PlangsGraph) {
  g.nodes.pl
    .set("pl+tcl", {
      name: "Tcl",
      description:
        'Tcl (pronounced "tickle" or as an initialism) is a high-level, general-purpose, interpreted, dynamic programming language. It was designed for embeddability, as a part of GUI applications, or in networking. Tcl casts everything into the mold of a command, including programming constructs like variable assignment and procedure definition. Tcl supports multiple programming paradigms, including imperative, functional, object-oriented, and procedural styles.',
      keywords: ["tcl", "tk"],
      websites: [
        { title: "www.tcl-lang.org", href: "https://www.tcl-lang.org/", kind: "homepage" },
        { title: "www.tcl.tk", href: "https://www.tcl.tk/", kind: "homepage" },
        { title: "Tcl", href: "https://en.wikipedia.org/wiki/Tcl", kind: "wikipedia" },
      ],
      extensions: [".tbc", ".tcl"],
      year: 1988,
      isTranspiler: false,
      isMainstream: true,
      releases: [
        { version: "8.6.13", name: "Tcl 8.6.13", date: "2023-04-11" },
        { version: "8.6.14", name: "Tcl 8.6.14", date: "2024-01-01" },
      ],
    })
    .addInfluencedBy(["pl+awk", "pl+lisp"])
    .addLicenses(["license+bsd"])
    .addParadigms(["paradigm+event-driven", "paradigm+functional", "paradigm+imperative", "paradigm+multi", "paradigm+oop", "paradigm+procedural"])
    .addPlatforms(["plat+cross", "plat+linux", "plat+mac", "plat+windows"])
    .addTags([
      "tag+app",
      "tag+automation",
      "tag+dbms",
      "tag+framework",
      "tag+industrial",
      "tag+instrument_control",
      "tag+interpreter",
      "tag+ray-tracer",
      "tag+scripting",
      "tag+testing",
      "tag+ui",
    ])
    .addTypeSystems(["tsys+dynamic", "tsys+string"])
    .addWrittenIn(["pl+c"]);
}
