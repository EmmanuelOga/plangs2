import type { PlangsGraph } from "../../entities/plangs_graph";

export function define(g: PlangsGraph) {
  g.buildParadigm("para+process").merge({
    name: "process-oriented",
    websites: [
      {
        kind: "wikipedia",
        title: "process-oriented",
        href: "https://en.wikipedia.org/wiki/Process-oriented_programming",
      },
      { kind: "wikipedia", title: "processing", href: "https://en.wikipedia.org/wiki/In-memory_processing" },
    ],
  });

  /**/
}
