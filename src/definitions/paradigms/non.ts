import type { PlangsGraph } from "../../entities/plangs_graph";

export function define(g: PlangsGraph) {
  const lb = g.paradigmBuilder;

  lb.define("para+non", "non-structured", {
    websites: [
      { kind: "wikipedia", title: "Non-structured", href: "https://en.wikipedia.org/wiki/Non-structured_programming" },
    ],
  });
}
