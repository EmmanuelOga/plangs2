import type { PlangsGraph } from "../../entities/plangs_graph";

export function define(g: PlangsGraph) {
  const lb = g.personBuilder;

  lb.define("person+arthur-whitney", "Arthur Whitney", {
    websites: [
      {
        title: "Arthur Whitney",
        href: "https://en.wikipedia.org/wiki/Arthur_Whitney_(computer_scientist)",
        kind: "wikipedia",
      },
    ],
  });

  /**/
}
