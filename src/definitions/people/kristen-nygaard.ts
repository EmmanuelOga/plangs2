import type { PlangsGraph } from "../../entities/plangs_graph";

export function define(g: PlangsGraph) {
  const lb = g.personBuilder;

  lb.define("person+kristen-nygaard", "Kristen Nygaard", {
    websites: [{ title: "Kristen Nygaard", href: "https://en.wikipedia.org/wiki/Kristen_Nygaard", kind: "wikipedia" }],
  });

  /**/
}
