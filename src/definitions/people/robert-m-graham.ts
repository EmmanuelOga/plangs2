import type { PlangsGraph } from "../../entities/plangs_graph";

export function define(g: PlangsGraph) {
  const lb = g.personBuilder;

  lb.define("person+robert-m-graham", "Robert M. Graham", {
    websites: [
      {
        title: "Robert M. Graham",
        href: "https://en.wikipedia.org/wiki/Robert_M._Graham_(computer_scientist)",
        kind: "wikipedia",
      },
    ],
  });

  /**/
}
