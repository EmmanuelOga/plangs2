import type { PlangsGraph } from "../../entities/plangs_graph";

export function define(g: PlangsGraph) {
  const lb = g.licenseBuilder;

  //-------------------------------------------------------------------------------

  lb.define("lic+simplified-bsd", "Simplified BSD", {
    websites: [
      {
        kind: "wikipedia",
        title: "Simplified BSD",
        href: "https://en.wikipedia.org/wiki/BSD_licenses#2-clause_license_.28.22Simplified_BSD_License.22_or_.22FreeBSD_License.22.29",
      },
      { kind: "wikipedia", title: "Simplified BSD", href: "https://en.wikipedia.org/wiki/Simplified_BSD_License" },
    ],
  });
}
