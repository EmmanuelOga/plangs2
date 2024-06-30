import type { PlangsGraph } from "../../entities/plangs_graph";

export function define(g: PlangsGraph) {
  const lb = g.licenseBuilder;

  lb.define("lic+commercial", "Commercial", {
    websites: [
      { kind: "wikipedia", title: "commercial software", href: "https://en.wikipedia.org/wiki/Commercial_software" },
    ],
  });
}
