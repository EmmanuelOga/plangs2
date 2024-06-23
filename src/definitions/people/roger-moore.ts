import type { PlangsGraph } from "../../entities/plangs_graph";

export function define(g: PlangsGraph) {
  const lb = g.personBuilder;

  lb.define("person+roger-moore", "Roger Moore", {
    websites: [
      {
        title: "Roger Moore",
        href: "https://en.wikipedia.org/wiki/Roger_Moore_(computer_scientist)",
        kind: "wikipedia",
      },
    ],
  });

  /**/
}
