import type { PlangsGraph } from "../../entities/plangs_graph";

export function define(g: PlangsGraph) {
  const lb = g.licenseBuilder;

  lb.define("lic+sun-public", "SPL-1.0", {
    websites: [{ kind: "wikipedia", title: "SPL-1.0", href: "https://en.wikipedia.org/wiki/Sun_Public_License" }],
  });
}
