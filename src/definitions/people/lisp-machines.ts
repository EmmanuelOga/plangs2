import type { PlangsGraph } from "../../entities/plangs_graph";

export function define(g: PlangsGraph) {
  const lb = g.personBuilder;

  lb.define("person+lisp-machines", "Lisp Machines", {
    websites: [{ title: "Lisp Machines", href: "https://en.wikipedia.org/wiki/Lisp_Machines", kind: "wikipedia" }],
  });

  /**/
}
