import type { PlangsGraph } from "../../entities/plangs_graph";

export function define(g: PlangsGraph) {
  const lb = g.paradigmBuilder;

  lb.define("para+distributed", "distributed", {
    websites: [
      { kind: "wikipedia", title: "distributed", href: "https://en.wikipedia.org/wiki/Distributed_computing" },
      { kind: "wikipedia", title: "distributed", href: "https://en.wikipedia.org/wiki/Distributed_programming" },
      { kind: "wikipedia", title: "Distributed cache", href: "https://en.wikipedia.org/wiki/Distributed_cache" },
    ],
  });
}
