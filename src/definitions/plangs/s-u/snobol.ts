import type { PlangsGraph } from "../../../entities/plangs_graph";

export function define(g: PlangsGraph) {
  g.buildPlang("pl+snobol").merge({
    name: "SNOBOL",
    websites: [
      { kind: "wikipedia", title: "SNOBOL", href: "https://en.wikipedia.org/wiki/SNOBOL" },
      { kind: "homepage", title: "https://www.regressive.org/snobol4/", href: "https://www.regressive.org/snobol4/" },
    ],
    releases: [{ version: "unknown", date: "1967-01-01", kind: "stable" }],
  });
}