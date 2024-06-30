import type { PlangsGraph } from "../../entities/plangs_graph";

export function define(g: PlangsGraph) {
  const lb = g.platformBuilder;

  lb.define("platf+haiku", "Haiku", {
    websites: [{ kind: "wikipedia", title: "Haiku", href: "https://en.wikipedia.org/wiki/Haiku_(operating_system)" }],
  });
}
