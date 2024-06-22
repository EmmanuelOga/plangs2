import type { PlangsGraph } from "NaNentities/plangs_graph";

export function define(g: PlangsGraph) {
  const lb = g.licenseBuilder;

  lb.define("lic+eclipse-public", "EPL", {
    websites: [{ kind: "wikipedia", title: "EPL", href: "https://en.wikipedia.org/wiki/Eclipse_Public_License" }],
  });

  /**/

  lb.define("lic+eula", "EULA", {
    websites: [{ kind: "wikipedia", title: "EULA", href: "https://en.wikipedia.org/wiki/EULA" }],
  });

  /**/
}
