import type { PlangsGraph } from "../../entities/plangs_graph";

export function define(g: PlangsGraph) {
  const lb = g.paradigmBuilder;

  //-------------------------------------------------------------------------------

  lb.define("para+general-purpose", "general-purpose", {
    websites: [
      {
        kind: "wikipedia",
        title: "general-purpose",
        href: "https://en.wikipedia.org/wiki/General-purpose_programming_language",
      },
    ],
  });

  //-------------------------------------------------------------------------------

  lb.define("para+generic", "generic programming", {
    websites: [{ kind: "wikipedia", title: "generic", href: "https://en.wikipedia.org/wiki/Generic_programming" }],
  });

  //-------------------------------------------------------------------------------

  lb.define("para+grid", "grid", {
    websites: [{ kind: "wikipedia", title: "grid", href: "https://en.wikipedia.org/wiki/Grid_computing" }],
  });
}
