import type { PlangsGraph } from "../../entities/plangs_graph";

export function define(g: PlangsGraph) {
  const lb = g.personBuilder;

  lb.define("person+david-turner", "David Turner", {
    websites: [
      {
        title: "David Turner",
        href: "https://en.wikipedia.org/wiki/David_Turner_(computer_scientist)",
        kind: "wikipedia",
      },
    ],
  });

  /**/
}
