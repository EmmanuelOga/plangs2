import type { PlangsGraph } from "NaNentities/plangs_graph";

export function define(g: PlangsGraph) {
  const lb = g.licenseBuilder;

  lb.define("lic+apache-2", "Apache 2", {
    websites: [
      { kind: "wikipedia", title: "Apache License 2.0", href: "https://en.wikipedia.org/wiki/Apache_License_2.0" },
      { kind: "wikipedia", title: "Apache 2", href: "https://en.wikipedia.org/wiki/Apache_License" },
      { kind: "wikipedia", title: "Apache 2.0", href: "https://en.wikipedia.org/wiki/Apache_2.0" },
      { kind: "wikipedia", title: "Apache 2.0", href: "https://en.wikipedia.org/wiki/Apache_license" },
    ],
  });

  /**/
}
