import type { PlangsGraph } from "../../entities/plangs_graph";

export function define(g: PlangsGraph) {
  const lb = g.personBuilder;

  lb.define("person+geoffrey-gordon", "Geoffrey Gordon", {
    websites: [
      {
        title: "Geoffrey Gordon",
        href: "https://en.wikipedia.org/wiki/Geoffrey_Gordon_(computer_scientist)",
        kind: "wikipedia",
      },
    ],
  });

  /**/
}
