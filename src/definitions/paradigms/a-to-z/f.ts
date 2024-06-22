import type { PlangsGraph } from "../../entities/plangs_graph";

export function define(g: PlangsGraph) {
  const lb = g.paradigmBuilder;

  //-------------------------------------------------------------------------------

  lb.define("para+function-level", "Function-level", {
    websites: [
      { kind: "wikipedia", title: "Function-level", href: "https://en.wikipedia.org/wiki/Function-level_programming" },
    ],
  });
}
