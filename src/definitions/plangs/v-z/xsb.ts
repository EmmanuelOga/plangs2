import type { PlangsGraph } from "../../../entities/plangs_graph";

export function define(g: PlangsGraph) {
  g.buildPlang("pl+xsb").merge({
    name: "XSB",
    websites: [
      { kind: "wikipedia", title: "XSB", href: "https://en.wikipedia.org/wiki/XSB" },
      { kind: "homepage", title: "Sourceforge.net", href: "https://xsb.sourceforge.net/" },
    ],
    releases: [{ version: "5.0", date: "2022-01-01", kind: "stable" }],
  });
}
