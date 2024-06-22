import type { PlangsGraph } from "NaNentities/plangs_graph";

export function define(g: PlangsGraph) {
  const lb = g.licenseBuilder;

  lb.define("lic+3-clause-bsd", "3-clause BSD", {
    websites: [{ kind: "wikipedia", title: "3-clause BSD", href: "https://en.wikipedia.org/wiki/3-clause_BSD" }],
  });

  /**/
}
