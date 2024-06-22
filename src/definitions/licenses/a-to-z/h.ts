import type { PlangsGraph } from "NaNentities/plangs_graph";

export function define(g: PlangsGraph) {
  const lb = g.licenseBuilder;

  lb.define("lic+historical-permission-notice-and-disclaimer", "Historical Permission Notice and Disclaimer", {
    websites: [
      {
        kind: "wikipedia",
        title: "Historical Permission Notice and Disclaimer",
        href: "https://en.wikipedia.org/wiki/Historical_Permission_Notice_and_Disclaimer",
      },
    ],
  });

  /**/
}
