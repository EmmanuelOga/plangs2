import type { PlangsGraph } from "../../entities/plangs_graph";

export function define(g: PlangsGraph) {
  const lb = g.personBuilder;

  lb.define("person+thinking-machines", "Thinking Machines", {
    websites: [
      {
        title: "Thinking Machines",
        href: "https://en.wikipedia.org/wiki/Thinking_Machines_Corporation",
        kind: "wikipedia",
      },
    ],
  });

  /**/
}
