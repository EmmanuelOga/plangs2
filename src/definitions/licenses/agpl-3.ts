import type { PlangsGraph } from "../../entities/plangs_graph";

export function define(g: PlangsGraph) {
  const lb = g.licenseBuilder;

  //-------------------------------------------------------------------------------

  lb.define("lic+agpl-3", "AGPLv3", {
    websites: [
      {
        kind: "wikipedia",
        title: "AGPL-3.0-or-later",
        href: "https://en.wikipedia.org/wiki/GNU_Affero_General_Public_License",
      },
      { kind: "wikipedia", title: "AGPLv3", href: "https://en.wikipedia.org/wiki/Affero_General_Public_License" },
    ],
  });
}
