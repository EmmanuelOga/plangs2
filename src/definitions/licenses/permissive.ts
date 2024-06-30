import type { PlangsGraph } from "../../entities/plangs_graph";

export function define(g: PlangsGraph) {
  const lb = g.licenseBuilder;

  lb.define("lic+permissive", {
    name: "BSD-like",
    websites: [
      { kind: "wikipedia", title: "Permissive", href: "https://en.wikipedia.org/wiki/Permissive_license" },
      { kind: "wikipedia", title: "BSD-like", href: "https://en.wikipedia.org/wiki/Permissive_software_license" },
    ],
  });
}
