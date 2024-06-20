import type { PlangsGraph } from "../../../entities/plangs_graph";

export function define(g: PlangsGraph) {
  const lb = g.personBuilder;

  lb.define("person+Xavier-Leroy", "Xavier Leroy", [
    {
      title: "Xavier Leroy",
      href: "https://en.wikipedia.org/wiki/Xavier_Leroy",
      kind: "wikipedia",
    },
  ]);
}
