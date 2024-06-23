import type { PlangsGraph } from "../../entities/plangs_graph";

export function define(g: PlangsGraph) {
  const lb = g.personBuilder;

  lb.define("person+lennart-augustsson", "Lennart Augustsson", {
    websites: [
      { title: "Lennart Augustsson", href: "https://en.wikipedia.org/wiki/Lennart_Augustsson", kind: "wikipedia" },
    ],
  });

  /**/
}
