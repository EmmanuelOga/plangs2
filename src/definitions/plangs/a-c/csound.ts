import type { PlangsGraph } from "../../../entities/plangs_graph";

export function define(g: PlangsGraph) {
  const lb = g.plangBuilder;

  lb.define(
    "pl+csound",
    "Csound",
    {
      name: "Csound",
      websites: [
        { kind: "wikipedia", title: "Csound", href: "https://en.wikipedia.org/wiki/Csound" },
        { kind: "homepage", title: "csound.com", href: "http://csound.com" },
      ],
      releases: [
        { version: "unknown", kind: "first" },
        { version: "unknown", date: "1986-01-01", kind: "first" },
        { version: "6.18.1", date: "2022-11-24", kind: "stable" },
      ],
    },
    { licenses: ["lic+lgpl"] },
  );
}
