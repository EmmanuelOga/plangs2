import type { PlangsGraph } from "../../entities/plangs_graph";

export function define(g: PlangsGraph) {
  g.buildParadigm("para+pipeline").merge({
    name: "pipeline",
    websites: [
      { kind: "wikipedia", title: "pipeline", href: "https://en.wikipedia.org/wiki/Pipeline_(software)" },
      { kind: "wikipedia", title: "pipeline", href: "https://en.wikipedia.org/wiki/Pipeline_programming" },
    ],
  });

  /**/
}
