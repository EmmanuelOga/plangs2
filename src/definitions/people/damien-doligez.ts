import type { PlangsGraph } from "../../entities/plangs_graph";

export function define(g: PlangsGraph) {
  const lb = g.personBuilder;

  lb.define("person+damien-doligez", "Damien Doligez", {
    websites: [{ title: "Damien Doligez", href: "https://en.wikipedia.org/wiki/Damien_Doligez", kind: "wikipedia" }],
  });

  /**/
}
