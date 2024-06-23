import type { PlangsGraph } from "../../entities/plangs_graph";

export function define(g: PlangsGraph) {
  const lb = g.personBuilder;

  lb.define("person+raymond-f-boyce", "Raymond F. Boyce", {
    websites: [
      { title: "Raymond F. Boyce", href: "https://en.wikipedia.org/wiki/Raymond_F._Boyce", kind: "wikipedia" },
    ],
  });

  /**/
}
