import type { PlangsGraph } from "../../entities/plangs_graph";

export function define(g: PlangsGraph) {
  g.buildLicense("lic+open-source").merge({
    name: "open source",
    websites: [
      { kind: "wikipedia", title: "open source", href: "https://en.wikipedia.org/wiki/Open-source_software" },
      { kind: "wikipedia", title: "Open-source", href: "https://en.wikipedia.org/wiki/Open-source_license" },
    ],
  });
}
