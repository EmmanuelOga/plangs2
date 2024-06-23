import type { PlangsGraph } from "../../entities/plangs_graph";

export function define(g: PlangsGraph) {
  const lb = g.personBuilder;

  lb.define("person+gerald-j-popek", "Gerald J. Popek", {
    websites: [{ title: "Gerald J. Popek", href: "https://en.wikipedia.org/wiki/Gerald_J._Popek", kind: "wikipedia" }],
  });

  /**/
}
