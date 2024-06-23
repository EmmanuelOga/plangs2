import type { PlangsGraph } from "../../entities/plangs_graph";

export function define(g: PlangsGraph) {
  const lb = g.personBuilder;

  lb.define("person+david-j-farber", "David J. Farber", {
    websites: [{ title: "David J. Farber", href: "https://en.wikipedia.org/wiki/David_J._Farber", kind: "wikipedia" }],
  });

  /**/
}
