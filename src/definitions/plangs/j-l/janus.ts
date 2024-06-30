import type { PlangsGraph } from "../../../entities/plangs_graph";

export function define(g: PlangsGraph) {
  g.buildPlang("pl+janus").merge({
    name: "Janus",
    websites: [
      {
        kind: "wikipedia",
        title: "Janus",
        href: "https://en.wikipedia.org/wiki/Janus_(concurrent_constraint_programming_language)",
      },
      {
        kind: "wikipedia",
        title: "Janus",
        href: "https://en.wikipedia.org/wiki/Janus_(time-reversible_computing_programming_language)",
      },
    ],
  });
}
