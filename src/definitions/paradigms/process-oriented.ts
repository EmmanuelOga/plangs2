import type { PlangsGraph } from "../../entities/plangs_graph";

export function define(g: PlangsGraph) {
  const lb = g.paradigmBuilder;

  //-------------------------------------------------------------------------------

  lb.define("para+process-oriented", "processing", {
    websites: [
      {
        kind: "wikipedia",
        title: "process-oriented",
        href: "https://en.wikipedia.org/wiki/Process-oriented_programming",
      },
      {
        kind: "wikipedia",
        title: "rule processing",
        href: "https://en.wikipedia.org/wiki/Production_system_(computer_science)",
      },
      { kind: "wikipedia", title: "processing", href: "https://en.wikipedia.org/wiki/In-memory_processing" },
    ],
  });
}
