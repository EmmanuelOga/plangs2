import type { PlangsGraph } from "../../entities/plangs_graph";

export function define(g: PlangsGraph) {
  const lb = g.paradigmBuilder;

  //-------------------------------------------------------------------------------

  lb.define("para+data-driven", "data exchange", {
    websites: [
      {
        kind: "wikipedia",
        title: "data and procedure hiding",
        href: "https://en.wikipedia.org/wiki/Information_hiding",
      },
      { kind: "wikipedia", title: "data-driven", href: "https://en.wikipedia.org/wiki/Data-driven_programming" },
      { kind: "wikipedia", title: "data exchange", href: "https://en.wikipedia.org/wiki/Data_exchange_language" },
    ],
  });
}
