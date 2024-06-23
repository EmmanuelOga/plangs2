import type { PlangsGraph } from "../../entities/plangs_graph";

export function define(g: PlangsGraph) {
  const lb = g.personBuilder;

  lb.define("person+ken-thompson", "Ken Thompson", {
    websites: [
      { title: "Ken Thompson", href: "https://en.wikipedia.org/wiki/Ken_Thompson", kind: "wikipedia" },
      {
        title: "Ken Thompson",
        href: "https://en.wikipedia.org/wiki/Ken_Thompson_(computer_programmer)",
        kind: "wikipedia",
      },
    ],
  });

  /**/
}
