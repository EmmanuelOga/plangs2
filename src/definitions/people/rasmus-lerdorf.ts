import type { PlangsGraph } from "../../entities/plangs_graph";

export function define(g: PlangsGraph) {
  const lb = g.personBuilder;

  lb.define("person+rasmus-lerdorf", "Rasmus Lerdorf", {
    websites: [{ title: "Rasmus Lerdorf", href: "https://en.wikipedia.org/wiki/Rasmus_Lerdorf", kind: "wikipedia" }],
  });

  /**/
}
