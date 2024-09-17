import type { PlangsGraph } from "@plangs/plangs";

export function define(g: PlangsGraph) {
  g.nodes.pl
    .set("pl+tcl", {
      name: "Tcl",
      description:
        'Tcl (pronounced "tickle" or as an initialism) is a high-level, general-purpose, interpreted, dynamic programming language. It was designed with the goal of being very simple but powerful. Tcl casts everything into the mold of a command, even programming constructs like variable assignment and procedure definition. Tcl supports multiple programming paradigms, including object-oriented, imperative, functional, and procedural styles.',
      firstAppeared: "1988-01-01",
      extensions: [".tbc", ".tcl"],
      websites: [
        { href: "https://www.tcl-lang.org/", title: "www.tcl-lang.org", kind: "homepage" },
        { href: "https://www.tcl.tk/", title: "www.tcl.tk", kind: "homepage" },
        { href: "https://en.wikipedia.org/wiki/Tcl", title: "Tcl", kind: "wikipedia" },
      ],
      releases: [{ version: "8.6.14", date: "2024-01-01" }],
    })
    .addInfluencedBy(["pl+awk", "pl+lisp"])
    .addLicenses(["license+bsd"])
    .addParadigms(["paradigm+event-driven", "paradigm+functional", "paradigm+imperative", "paradigm+multi", "paradigm+oop"])
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
    .addTypeSystems(["tsys+dynamic", "tsys+string"]);
}
