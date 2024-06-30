import type { PlangsGraph } from "../../entities/plangs_graph";

export function define(g: PlangsGraph) {
  g.buildParadigm("para+prototypes").merge({
    name: "prototype-based",
    websites: [
      {
        kind: "wikipedia",
        title: "prototype-based",
        href: "https://en.wikipedia.org/wiki/Prototype-based_programming",
      },
      {
        kind: "wikipedia",
        title: "prototype-based",
        href: "https://en.wikipedia.org/wiki/Prototype-oriented_programming",
      },
    ],
  });
}
