import type { PlangsGraph } from "../../entities/plangs_graph";

export function define(g: PlangsGraph) {
  const lb = g.licenseBuilder;

  //-------------------------------------------------------------------------------

  lb.define("lic+public-domain", "Public domain", {
    websites: [
      { kind: "wikipedia", title: "Public domain", href: "https://en.wikipedia.org/wiki/Public_domain" },
      { kind: "wikipedia", title: "Public Domain", href: "https://en.wikipedia.org/wiki/Public_Domain" },
    ],
  });
}
