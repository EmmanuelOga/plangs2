import type { PlangsGraph } from "../../entities/plangs_graph";

export function define(g: PlangsGraph) {
  const lb = g.personBuilder;

  lb.define("person+larry-wall", "Larry Wall", {
    websites: [{ title: "Larry Wall", href: "https://en.wikipedia.org/wiki/Larry_Wall", kind: "wikipedia" }],
  });

  /**/
}
