import type { PlangsGraph } from "../../entities/plangs_graph";

export function define(g: PlangsGraph) {
  const lb = g.licenseBuilder;

  //-------------------------------------------------------------------------------

  lb.define("lic+free-software", "free software", {
    websites: [
      { kind: "wikipedia", title: "free software", href: "https://en.wikipedia.org/wiki/Free_software" },
      {
        kind: "wikipedia",
        title: "free-software license",
        href: "https://en.wikipedia.org/wiki/Free-software_license",
      },
    ],
  });
}
