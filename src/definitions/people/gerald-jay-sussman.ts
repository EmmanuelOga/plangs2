import type { PlangsGraph } from "../../entities/plangs_graph";

export function define(g: PlangsGraph) {
  const lb = g.personBuilder;

  lb.define("person+gerald-jay-sussman", "Gerald Jay Sussman", {
    websites: [
      { title: "Gerald Jay Sussman", href: "https://en.wikipedia.org/wiki/Gerald_Jay_Sussman", kind: "wikipedia" },
    ],
  });

  /**/
}
