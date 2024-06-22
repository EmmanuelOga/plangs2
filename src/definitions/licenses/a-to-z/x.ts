import type { PlangsGraph } from "../../entities/plangs_graph";

export function define(g: PlangsGraph) {
  const lb = g.licenseBuilder;

  //-------------------------------------------------------------------------------

  lb.define("lic+x11", "X11", {
    websites: [{ kind: "wikipedia", title: "X11", href: "https://en.wikipedia.org/wiki/MIT_License" }],
  });

  //-------------------------------------------------------------------------------

  lb.define("lic+xfree86", "XFree86", {
    websites: [{ kind: "wikipedia", title: "XFree86", href: "https://en.wikipedia.org/wiki/XFree86_License" }],
  });
}
