import type { PlangsGraph } from "../../entities/plangs_graph";

export function define(g: PlangsGraph) {
  const lb = g.paradigmBuilder;

  //-------------------------------------------------------------------------------

  lb.define("para+vector-oriented", "vector-oriented programming", {
    websites: [
      {
        kind: "wikipedia",
        title: "vector-oriented programming",
        href: "https://en.wikipedia.org/wiki/Array_programming",
      },
    ],
  });
}
