import type { PlangsGraph } from "../../entities/plangs_graph";

export function define(g: PlangsGraph) {
  const lb = g.licenseBuilder;

  lb.define("lic+eula", "EULA", {
    websites: [{ kind: "wikipedia", title: "EULA", href: "https://en.wikipedia.org/wiki/EULA" }],
  });
}
