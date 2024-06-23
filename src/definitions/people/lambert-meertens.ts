import type { PlangsGraph } from "../../entities/plangs_graph";

export function define(g: PlangsGraph) {
  const lb = g.personBuilder;

  lb.define("person+lambert-meertens", "Lambert Meertens", {
    websites: [
      { title: "Lambert Meertens", href: "https://en.wikipedia.org/wiki/Lambert_Meertens", kind: "wikipedia" },
    ],
  });

  /**/
}
