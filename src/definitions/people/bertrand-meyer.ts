import type { PlangsGraph } from "../../entities/plangs_graph";

export function define(g: PlangsGraph) {
  const lb = g.personBuilder;

  lb.define("person+bertrand-meyer", "Bertrand Meyer", {
    websites: [{ title: "Bertrand Meyer", href: "https://en.wikipedia.org/wiki/Bertrand_Meyer", kind: "wikipedia" }],
  });

  /**/
}
