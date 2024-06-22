import type { PlangsGraph } from "../../entities/plangs_graph";

export function define(g: PlangsGraph) {
  const lb = g.paradigmBuilder;

  //-------------------------------------------------------------------------------

  lb.define("para+reactive", "reactive", {
    websites: [{ kind: "wikipedia", title: "reactive", href: "https://en.wikipedia.org/wiki/Reactive_programming" }],
  });

  //-------------------------------------------------------------------------------

  lb.define("para+real-time", "real-time", {
    websites: [{ kind: "wikipedia", title: "real-time", href: "https://en.wikipedia.org/wiki/Real-time_computing" }],
  });

  //-------------------------------------------------------------------------------

  lb.define("para+reversible", "reversible", {
    websites: [{ kind: "wikipedia", title: "reversible", href: "https://en.wikipedia.org/wiki/Reversible_computing" }],
  });
}
