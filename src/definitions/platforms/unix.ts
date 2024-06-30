import type { PlangsGraph } from "../../entities/plangs_graph";

export function define(g: PlangsGraph) {
  const lb = g.platformBuilder;

  lb.define("platf+unix", {
    name: "Unix-like",
    websites: [
      { kind: "wikipedia", title: "Unix-like", href: "https://en.wikipedia.org/wiki/Unix-like" },
      { kind: "wikipedia", title: "Unix", href: "https://en.wikipedia.org/wiki/Unix" },
    ],
  });
}
