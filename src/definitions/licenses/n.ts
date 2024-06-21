import type { PlangsGraph } from "../../entities/plangs_graph";

export function define(g: PlangsGraph) {
  const lb = g.licenseBuilder;

  //-------------------------------------------------------------------------------

  lb.define("lic+new-bsd", "New BSD License", [
    { kind: "wikipedia", title: "New BSD License", href: "https://en.wikipedia.org/wiki/New_BSD_License" },
  ]);
}
