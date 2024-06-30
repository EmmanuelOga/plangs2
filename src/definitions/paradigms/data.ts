import type { PlangsGraph } from "../../entities/plangs_graph";

export function define(g: PlangsGraph) {
  g.buildParadigm("para+data").merge({
    name: "Data-driven",
    websites: [
      { kind: "wikipedia", title: "data-driven", href: "https://en.wikipedia.org/wiki/Data-driven_programming" },
      { kind: "wikipedia", title: "data exchange", href: "https://en.wikipedia.org/wiki/Data_exchange_language" },
    ],
  });

  /**/
}
