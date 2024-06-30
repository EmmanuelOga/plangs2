import type { PlangsGraph } from "../../entities/plangs_graph";

export function define(g: PlangsGraph) {
  const lb = g.paradigmBuilder;

  lb.define("para+dataflow", "dataflow", {
    websites: [
      { kind: "wikipedia", title: "Dataflow programming", href: "https://en.wikipedia.org/wiki/Dataflow" },
      { kind: "wikipedia", title: "Dataflow", href: "https://en.wikipedia.org/wiki/Dataflow_programming" },
    ],
  });
}
