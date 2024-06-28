import type { PlangsGraph } from "../../entities/plangs_graph";

export function define(g: PlangsGraph) {
  const lb = g.paradigmBuilder;

  lb.define("para+concurrent", "concurrent", {
    websites: [
      { kind: "wikipedia", title: "concurrent", href: "https://en.wikipedia.org/wiki/Concurrent_programming" },
      { kind: "wikipedia", title: "concurrent", href: "https://en.wikipedia.org/wiki/Concurrent_programming_language" },
      { kind: "wikipedia", title: "concurrent", href: "https://en.wikipedia.org/wiki/Concurrent_computing" },
    ],
  });
}
