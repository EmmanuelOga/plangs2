import type { PlangsGraph } from "../../entities/plangs_graph";

export function define(g: PlangsGraph) {
  const lb = g.licenseBuilder;

  //-------------------------------------------------------------------------------

  lb.define("lic+artistic-2", "Artistic License 2", {
    websites: [
      { kind: "wikipedia", title: "Artistic License 2.0", href: "https://en.wikipedia.org/wiki/Artistic_License_2.0" },
      { kind: "wikipedia", title: "Artistic License 2", href: "https://en.wikipedia.org/wiki/Artistic_License" },
    ],
  });
}
