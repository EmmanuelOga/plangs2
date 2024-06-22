import type { PlangsGraph } from "../../entities/plangs_graph";

export function define(g: PlangsGraph) {
  const lb = g.licenseBuilder;

  //-------------------------------------------------------------------------------

  lb.define("lic+modified-bsd", "modified BSD", {
    websites: [
      { kind: "wikipedia", title: "modified BSD", href: "https://en.wikipedia.org/wiki/Modified_BSD_license" },
      { kind: "wikipedia", title: "Modified BSD License", href: "https://en.wikipedia.org/wiki/BSD_licenses" },
    ],
  });
}
