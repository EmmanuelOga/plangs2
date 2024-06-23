import type { PlangsGraph } from "../../entities/plangs_graph";

export function define(g: PlangsGraph) {
  const lb = g.personBuilder;

  lb.define("person+charles-h-moore", "Charles H. Moore", {
    websites: [
      { title: "Charles H. Moore", href: "https://en.wikipedia.org/wiki/Charles_H._Moore", kind: "wikipedia" },
    ],
  });

  /**/
}
