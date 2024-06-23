import type { PlangsGraph } from "../../entities/plangs_graph";

export function define(g: PlangsGraph) {
  const lb = g.personBuilder;

  lb.define("person+jeremy-ashkenas", "Jeremy Ashkenas", {
    websites: [{ title: "Jeremy Ashkenas", href: "https://en.wikipedia.org/wiki/Jeremy_Ashkenas", kind: "wikipedia" }],
  });

  /**/
}
