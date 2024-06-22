import type { PlangsGraph } from "../../entities/plangs_graph";

export function define(g: PlangsGraph) {
  const lb = g.licenseBuilder;

  //-------------------------------------------------------------------------------

  lb.define("lic+icu", "ICU", {
    websites: [
      { kind: "wikipedia", title: "ICU", href: "https://en.wikipedia.org/wiki/International_Components_for_Unicode" },
    ],
  });

  //-------------------------------------------------------------------------------

  lb.define("lic+ios", "iOS", {
    websites: [{ kind: "wikipedia", title: "iOS", href: "https://en.wikipedia.org/wiki/IOS" }],
  });

  //-------------------------------------------------------------------------------

  lb.define("lic+isc", "ISC", {
    websites: [{ kind: "wikipedia", title: "ISC", href: "https://en.wikipedia.org/wiki/ISC_license" }],
  });
}
