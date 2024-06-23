import type { PlangsGraph } from "../../entities/plangs_graph";

export function define(g: PlangsGraph) {
  const lb = g.personBuilder;

  lb.define("person+keith-clark", "Keith Clark", {
    websites: [
      {
        title: "Keith Clark",
        href: "https://en.wikipedia.org/wiki/Keith_Clark_(computer_scientist)",
        kind: "wikipedia",
      },
    ],
  });

  /**/
}
