import type { PlangsGraph } from "../../entities/plangs_graph";

export function define(g: PlangsGraph) {
  const lb = g.licenseBuilder;

  //-------------------------------------------------------------------------------

  lb.define("lic+mozilla-public", "Mozilla Public", {
    websites: [
      { kind: "wikipedia", title: "Mozilla Public", href: "https://en.wikipedia.org/wiki/Mozilla_Public_Licence" },
      {
        kind: "wikipedia",
        title: "Mozilla Public License",
        href: "https://en.wikipedia.org/wiki/Mozilla_Public_License",
      },
    ],
  });
}
