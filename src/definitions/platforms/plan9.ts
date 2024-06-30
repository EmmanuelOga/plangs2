import type { PlangsGraph } from "../../entities/plangs_graph";

export function define(g: PlangsGraph) {
  const lb = g.platformBuilder;

  lb.define("platf+plan9", {
    name: "Plan 9 from User Space",
    websites: [
      {
        kind: "wikipedia",
        title: "Plan 9 from Bell Labs",
        href: "https://en.wikipedia.org/wiki/Plan_9_from_Bell_Labs",
      },
      {
        kind: "wikipedia",
        title: "Plan 9 from User Space",
        href: "https://en.wikipedia.org/wiki/Plan_9_from_User_Space",
      },
    ],
  });
}
