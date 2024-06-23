import type { PlangsGraph } from "../../entities/plangs_graph";

export function define(g: PlangsGraph) {
  const lb = g.personBuilder;

  lb.define("person+james-gosling", "James Gosling", {
    websites: [{ title: "James Gosling", href: "https://en.wikipedia.org/wiki/James_Gosling", kind: "wikipedia" }],
  });

  /**/
}
