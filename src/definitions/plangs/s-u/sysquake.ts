import type { PlangsGraph } from "../../../entities/plangs_graph";

export function define(g: PlangsGraph) {
  const lb = g.plangBuilder;

  lb.define(
    "pl+sysquake",
    {
      name: "Sysquake",
      websites: [
        { kind: "wikipedia", title: "Sysquake", href: "https://en.wikipedia.org/wiki/Sysquake" },
        { kind: "homepage", title: "Sysquake product page", href: "http://www.calerga.com/products/Sysquake/" },
      ],
      releases: [{ version: "6.5", date: "2019-01-01", kind: "stable" }],
    },
    { licenses: ["lic+proprietary"] },
  );
}
