import type { PlangsGraph } from "../../../entities/plangs_graph";

export function define(g: PlangsGraph) {
  g.buildPlang("pl+tcl")
    .merge({
      name: "Tcl",
      websites: [{ kind: "wikipedia", title: "Tcl", href: "https://en.wikipedia.org/wiki/Tcl" }],
      images: [{ kind: "screenshot", url: "https://upload.wikimedia.org/wikipedia/commons/e/eb/Tcl-powered.svg" }],
      releases: [{ version: "8.6.14", date: "2024-01-01", kind: "stable" }],
    })
    .addInfluences(["pl+awk", "pl+lisp"])
    .addPerson("person+john-ousterhout", { role: "designer" })
    .addLicense("lic+bsd-s", {
      refs: [{ href: "http://www.tcl-lang.org/software/tcltk/license.html", title: "Tcl/Tk License Terms" }],
    })
    .addParadigms(["para+multi", "para+event", "para+functional", "para+imperative", "para+objects"])
    .addTypeSystems(["tsys+dynamic"]);

  /**/
}
