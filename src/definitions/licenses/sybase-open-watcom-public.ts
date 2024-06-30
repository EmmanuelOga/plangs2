import type { PlangsGraph } from "../../entities/plangs_graph";

export function define(g: PlangsGraph) {
  const lb = g.licenseBuilder;

  lb.define("lic+sybase-open-watcom-public", "Sybase Open Watcom Public License", {
    websites: [
      {
        kind: "wikipedia",
        title: "Sybase Open Watcom Public License",
        href: "https://en.wikipedia.org/wiki/Sybase_Open_Watcom_Public_License",
      },
    ],
  });
}
