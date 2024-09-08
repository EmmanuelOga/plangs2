import type { PlangsGraph } from "@plangs/plangs";

export function define(g: PlangsGraph) {
  g.n_plang
    .set("pl+tcl", {
      images: [],
      name: "Tcl",
      description:
        'Tcl (pronounced "tickle" or as an initialism) is a high-level, general-purpose, interpreted, dynamic programming language. It was designed with the goal of being very simple but powerful. Tcl casts everything into the mold of a command, even programming constructs like variable assignment and procedure definition. Tcl supports multiple programming paradigms, including object-oriented, imperative, functional, and procedural styles.',
      websites: [
        { href: "https://www.tcl-lang.org/", title: "www.tcl-lang.org", kind: "homepage" },
        { href: "https://www.tcl.tk/", title: "www.tcl.tk", kind: "homepage" },
        { href: "https://en.wikipedia.org/wiki/Tcl", title: "Tcl", kind: "wikipedia" },
      ],
      extensions: [".tbc", ".tcl"],
      releases: [{ version: "8.6.14", date: "2024-01-01" }],
    })
    .addInfluencedBy(["pl+awk", "pl+lisp"])
    .addLicenses(["lic+bsd"])
    .addParadigms(["para+event-driven", "para+functional", "para+imperative", "para+multi", "para+oop"])
    .addTypeSystems(["tsys+dynamic", "tsys+string"]);
}
