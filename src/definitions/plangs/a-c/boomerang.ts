import type { PlangsGraph } from "../../../entities/plangs_graph";

export function define(g: PlangsGraph) {
  const lb = g.plangBuilder;

  lb.define(
    "pl+boomerang",
    "Boomerang",
    {
      name: "Boomerang",
      websites: [
        {
          kind: "wikipedia",
          title: "Boomerang",
          href: "https://en.wikipedia.org/wiki/Boomerang_(programming_language)",
        },
        { kind: "homepage", title: "www.seas.upenn.edu/~harmony/", href: "http://www.seas.upenn.edu/~harmony/" },
      ],
      releases: [
        { version: "unknown", date: "2008-01-01", kind: "first" },
        { version: "0.2", date: "2009-09-02", kind: "stable" },
      ],
    },
    {
      influences: ["pl+ocaml"],
      people: [
        ["person+benjamin-c-pierce", { role: "developer" }],
        ["person+nate-foster", { role: "developer" }],
      ],
      platforms: ["platf+linux", "platf+mac"],
    },
  );
}
