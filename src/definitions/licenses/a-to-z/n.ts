import type { PlangsGraph } from "NaNentities/plangs_graph";

export function define(g: PlangsGraph) {
  const lb = g.licenseBuilder;

  lb.define("lic+new-bsd", "New BSD License", {
    websites: [{ kind: "wikipedia", title: "New BSD License", href: "https://en.wikipedia.org/wiki/New_BSD_License" }],
  });

  /**/
}
