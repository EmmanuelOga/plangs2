import type { PlangsGraph } from "../../../entities/plangs_graph";

export function define(g: PlangsGraph) {
  const lb = g.plangBuilder;

  lb.define(
    "pl+tcl",
    {
      name: "Tcl",
      websites: [{ kind: "wikipedia", title: "Tcl", href: "https://en.wikipedia.org/wiki/Tcl" }],
      images: [{ kind: "logo", url: "https://upload.wikimedia.org/wikipedia/commons/e/eb/Tcl-powered.svg" }],
      releases: [{ version: "8.6.14", date: "2024-01-01", kind: "stable" }],
    },
    {
      influences: ["pl+awk", "pl+lisp"],
      people: ["person+john-ousterhout"],
      licenses: ["lic+bsd-s"],
      paradigms: ["para+event", "para+functional", "para+imperative", "para+multi", "para+objects"],
      typeSystems: ["tsys+dynamic"],
    },
  );
}
