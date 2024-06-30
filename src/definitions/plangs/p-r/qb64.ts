import type { PlangsGraph } from "../../../entities/plangs_graph";

export function define(g: PlangsGraph) {
  const lb = g.plangBuilder;

  lb.define(
    "pl+qb64",
    {
      name: "QB64",
      websites: [{ kind: "wikipedia", title: "QB64", href: "https://en.wikipedia.org/wiki/QB64" }],
      images: [
        { kind: "logo", url: "https://upload.wikimedia.org/wikipedia/commons/f/f5/QB64-1-4-logo-hd-transparency.svg" },
      ],
      releases: [{ version: "2.0.2", date: "2021-01-01", kind: "stable" }],
    },
    { influences: ["pl+basic"], licenses: ["lic+mit"], platforms: ["platf+win", "platf+linux", "platf+mac"] },
  );
}
