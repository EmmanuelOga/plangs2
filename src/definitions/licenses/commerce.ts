import type { PlangsGraph } from "../../entities/plangs_graph";

export function define(g: PlangsGraph) {
  const lb = g.licenseBuilder;

  lb.define("lic+commerce", "Commercial", {
    websites: [{ kind: "wikipedia", title: "Commercial", href: "https://en.wikipedia.org/wiki/Commerce" }],
  });
}
