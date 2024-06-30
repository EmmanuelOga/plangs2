import type { PlangsGraph } from "../../entities/plangs_graph";

export function define(g: PlangsGraph) {
  g.buildPlatform("platf+unix").merge({
    name: "Unix-like",
    websites: [
      { kind: "wikipedia", title: "Unix-like", href: "https://en.wikipedia.org/wiki/Unix-like" },
      { kind: "wikipedia", title: "Unix", href: "https://en.wikipedia.org/wiki/Unix" },
    ],
  });
}
