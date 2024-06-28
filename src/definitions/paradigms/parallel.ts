import type { PlangsGraph } from "../../entities/plangs_graph";

export function define(g: PlangsGraph) {
  const lb = g.paradigmBuilder;

  lb.define("para+parallel", "parallel", {
    websites: [
      { kind: "wikipedia", title: "parallel", href: "https://en.wikipedia.org/wiki/Parallel_programming" },
      { kind: "wikipedia", title: "parallel", href: "https://en.wikipedia.org/wiki/Parallel_computing" },
      {
        kind: "wikipedia",
        title: "Parallel programming",
        href: "https://en.wikipedia.org/wiki/Parallel_programming_model",
      },
    ],
  });
}
