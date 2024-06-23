import type { PlangsGraph } from "../../entities/plangs_graph";

export function define(g: PlangsGraph) {
  const lb = g.personBuilder;

  lb.define("person+dassault-systemes", "Dassault Systèmes", {
    websites: [
      { title: "Dassault Systèmes", href: "https://en.wikipedia.org/wiki/Dassault_Syst%C3%A8mes", kind: "wikipedia" },
    ],
  });

  /**/
}
