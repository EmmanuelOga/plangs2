import type { PlangsGraph } from "../../entities/plangs_graph";

export function define(g: PlangsGraph) {
  g.buildLicense("lic+mozilla-public").merge({
    name: "MPL",
    websites: [{ kind: "wikipedia", title: "MPL-1-1", href: "https://en.wikipedia.org/wiki/Mozilla_Public_License" }],
  });

  /**/

  g.buildLicense("lic+mozilla-public-licence").merge({
    name: "Mozilla Public",
    websites: [
      { kind: "wikipedia", title: "Mozilla Public", href: "https://en.wikipedia.org/wiki/Mozilla_Public_Licence" },
    ],
  });

  /**/
}
