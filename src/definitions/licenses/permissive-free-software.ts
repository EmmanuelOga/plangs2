import type { PlangsGraph } from "../../entities/plangs_graph";

export function define(g: PlangsGraph) {
  const lb = g.licenseBuilder;

  //-------------------------------------------------------------------------------

  lb.define("lic+permissive-free-software", "Permissive free software", {
    websites: [
      {
        kind: "wikipedia",
        title: "Permissive free software licence",
        href: "https://en.wikipedia.org/wiki/Permissive_free_software_licence",
      },
      {
        kind: "wikipedia",
        title: "Permissive free software",
        href: "https://en.wikipedia.org/wiki/Permissive_free_software_license",
      },
    ],
  });
}
