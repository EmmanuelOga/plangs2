import type { PlangsGraph } from "../../entities/plangs_graph";

export function define(g: PlangsGraph) {
  g.buildParadigm("para+agent").merge({
    name: "agent-based",
    websites: [
      { kind: "wikipedia", title: "agent-oriented", href: "https://en.wikipedia.org/wiki/Agent-oriented_programming" },
      { kind: "wikipedia", title: "agent-based", href: "https://en.wikipedia.org/wiki/Agent-based_model" },
    ],
  });

  /**/
}
