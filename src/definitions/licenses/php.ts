import type { PlangsGraph } from "../../entities/plangs_graph";

export function define(g: PlangsGraph) {
  const lb = g.licenseBuilder;

  lb.define("lic+php", "PHP License", {
    websites: [{ kind: "wikipedia", title: "PHP License", href: "https://en.wikipedia.org/wiki/PHP_License" }],
  });
}
