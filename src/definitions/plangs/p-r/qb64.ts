import type { PlangsGraph } from "../../../entities/plangs_graph";

export function define(g: PlangsGraph) {
  const lb = g.plangBuilder;

  lb.define(
    "pl+qb64",
    "QB64",
    {
      name: "QB64",
      websites: [
        { kind: "wikipedia", title: "QB64", href: "https://en.wikipedia.org/wiki/QB64" },
        { kind: "homepage", title: "www.qb64.com", href: "http://www.qb64.com" },
      ],
      images: [
        { kind: "logo", url: "https://upload.wikimedia.org/wikipedia/commons/f/f5/QB64-1-4-logo-hd-transparency.svg" },
      ],
      releases: [
        { version: "unknown", date: "2007-09-08", kind: "first" },
        { version: "2.0.2", date: "2021-11-07", kind: "stable" },
      ],
    },
    {
      influences: ["pl+basic"],
      licenses: ["lic+mit"],
      people: [["person+rob-galleon", "developer"]],
      platforms: ["platf+linux", "platf+mac", "platf+win"],
    },
  );
}
