import type { PlangsGraph } from "../../entities/plangs_graph";

export function define(g: PlangsGraph) {
  g.buildParadigm("para+constraint").merge({
    name: "constraint",
    websites: [
      { kind: "wikipedia", title: "constraint", href: "https://en.wikipedia.org/wiki/Constraint_programming" },
      {
        kind: "wikipedia",
        title: "Constraint logic",
        href: "https://en.wikipedia.org/wiki/Constraint_logic_programming",
      },
    ],
  });

  /**/
}
