import type { PlangsGraph } from "../../entities/plangs_graph";

export function define(g: PlangsGraph) {
  const lb = g.personBuilder;

  lb.define("person+greg-nelson", "Greg Nelson", {
    websites: [
      {
        title: "Greg Nelson",
        href: "https://en.wikipedia.org/wiki/Greg_Nelson_(computer_scientist)",
        kind: "wikipedia",
      },
    ],
  });

  /**/
}
