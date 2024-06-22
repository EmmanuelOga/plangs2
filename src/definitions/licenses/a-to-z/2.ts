import type { PlangsGraph } from "NaNentities/plangs_graph";

export function define(g: PlangsGraph) {
  const lb = g.licenseBuilder;

  lb.define("lic+2-clause-bsd", "2-clause BSD License since 2020", {
    websites: [
      {
        kind: "wikipedia",
        title: "2-clause BSD License since 2020",
        href: "https://en.wikipedia.org/wiki/BSD_licenses",
      },
    ],
  });

  /**/
}
