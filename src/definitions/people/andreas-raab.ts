import type { PlangsGraph } from "../../entities/plangs_graph";

export function define(g: PlangsGraph) {
  const lb = g.personBuilder;

  lb.define("person+andreas-raab", "Andreas Raab", {
    websites: [{ title: "Andreas Raab", href: "https://en.wikipedia.org/wiki/Andreas_Raab", kind: "wikipedia" }],
  });

  /**/
}
