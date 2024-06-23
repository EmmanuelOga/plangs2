import type { PlangsGraph } from "../../entities/plangs_graph";

export function define(g: PlangsGraph) {
  const lb = g.personBuilder;

  lb.define("person+cecil-wayne-ratliff", "Cecil Wayne Ratliff", {
    websites: [
      { title: "Cecil Wayne Ratliff", href: "https://en.wikipedia.org/wiki/C._Wayne_Ratliff", kind: "wikipedia" },
    ],
  });

  /**/
}
