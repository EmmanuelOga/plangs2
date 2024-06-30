import type { PlangsGraph } from "../../entities/plangs_graph";

export function define(g: PlangsGraph) {
  const lb = g.platformBuilder;

  lb.define("platf+zephyr", "Zephyr", {
    websites: [{ kind: "wikipedia", title: "Zephyr", href: "https://en.wikipedia.org/wiki/Zephyr_(operating_system)" }],
  });
}
