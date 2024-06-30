import type { PlangsGraph } from "../../../entities/plangs_graph";

export function define(g: PlangsGraph) {
  const lb = g.plangBuilder;

  lb.define("pl+scicos", {
    name: "Scicos",
    websites: [
      { kind: "wikipedia", title: "Scicos", href: "https://en.wikipedia.org/wiki/Scicos" },
      { kind: "homepage", title: "www.scicos.org", href: "http://www.scicos.org" },
    ],
    releases: [{ version: "4.4.1", date: "2011-01-01", kind: "stable" }],
  });
}
