import type { PlangsGraph } from "../../entities/plangs_graph";

export function define(g: PlangsGraph) {
  const lb = g.personBuilder;

  lb.define("person+donald-d-chamberlin", "Donald D. Chamberlin", {
    websites: [
      { title: "Donald D. Chamberlin", href: "https://en.wikipedia.org/wiki/Donald_D._Chamberlin", kind: "wikipedia" },
    ],
  });

  /**/
}
