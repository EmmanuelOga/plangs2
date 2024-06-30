import type { PlangsGraph } from "../../entities/plangs_graph";

export function define(g: PlangsGraph) {
  const lb = g.licenseBuilder;

  lb.define("lic+ccs", "CC-BY-SA", {
    websites: [
      { kind: "wikipedia", title: "CC-BY-SA", href: "https://en.wikipedia.org/wiki/Creative_Commons_licenses" },
    ],
  });
}
