import type { PlangsGraph } from "../../entities/plangs_graph";

export function define(g: PlangsGraph) {
  const lb = g.licenseBuilder;

  //-------------------------------------------------------------------------------

  lb.define("lic+bsd", "BSD", {
    websites: [
      { kind: "wikipedia", title: "BSD", href: "https://en.wikipedia.org/wiki/BSD_licenses" },
      { kind: "wikipedia", title: "BSD license", href: "https://en.wikipedia.org/wiki/BSD_license" },
      { kind: "wikipedia", title: "BSD", href: "https://en.wikipedia.org/wiki/BSD" },
      { kind: "wikipedia", title: "BSD", href: "https://en.wikipedia.org/wiki/Modified_BSD_License" },
      { kind: "wikipedia", title: "BSD License", href: "https://en.wikipedia.org/wiki/BSD_License" },
    ],
  });
}
