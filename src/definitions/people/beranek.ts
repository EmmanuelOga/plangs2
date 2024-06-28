import type { PlangsGraph } from "../../entities/plangs_graph";

export function define(g: PlangsGraph) {
  const lb = g.personBuilder;

  lb.define("person+beranek", "Beranek", {
    websites: [
      { title: "Bolt, Beranek and Newman", href: "https://en.wikipedia.org/wiki/BBN_Technologies", kind: "wikipedia" },
    ],
  });

  /**/
}
