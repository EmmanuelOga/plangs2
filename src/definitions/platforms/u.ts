import type { PlangsGraph } from "../../entities/plangs_graph";

export function define(g: PlangsGraph) {
  const lb = g.platformBuilder;

  //-------------------------------------------------------------------------------

  lb.define("platf+unix", "UNIX", [
    { kind: "wikipedia", title: "Unix", href: "https://en.wikipedia.org/wiki/Unix" },
    { kind: "wikipedia", title: "Unix-like", href: "https://en.wikipedia.org/wiki/Unix-like" },
    {
      kind: "wikipedia",
      title: "Version 10 Unix",
      href: "https://en.wikipedia.org/wiki/Version_10_Unix",
    },
    { kind: "wikipedia", title: "UNIX", href: "https://en.wikipedia.org/wiki/UNIX" },
  ]);
}
