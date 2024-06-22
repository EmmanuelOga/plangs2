import type { PlangsGraph } from "../../entities/plangs_graph";

export function define(g: PlangsGraph) {
  const lb = g.paradigmBuilder;

  //-------------------------------------------------------------------------------

  lb.define("para+class-based", "class-based", {
    websites: [
      { kind: "wikipedia", title: "class-based", href: "https://en.wikipedia.org/wiki/Class-based_programming" },
      { kind: "wikipedia", title: "class-based", href: "https://en.wikipedia.org/wiki/Class_(computer_programming)" },
    ],
  });
}
