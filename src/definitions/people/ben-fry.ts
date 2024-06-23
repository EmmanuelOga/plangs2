import type { PlangsGraph } from "../../entities/plangs_graph";

export function define(g: PlangsGraph) {
  const lb = g.personBuilder;

  lb.define("person+ben-fry", "Ben Fry", {
    websites: [{ title: "Ben Fry", href: "https://en.wikipedia.org/wiki/Ben_Fry", kind: "wikipedia" }],
  });

  /**/
}
