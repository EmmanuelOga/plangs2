import type { PlangsGraph } from "../../entities/plangs_graph";

export function define(g: PlangsGraph) {
  g.buildPlatform("platf+amd").merge({
    name: "AMD",
    websites: [{ kind: "wikipedia", title: "AMD", href: "https://en.wikipedia.org/wiki/Advanced_Micro_Devices" }],
  });

  /**/
  g.buildPlatform("platf+amd-am2900").merge({
    name: "2901",
    websites: [{ kind: "wikipedia", title: "2901", href: "https://en.wikipedia.org/wiki/AMD_Am2900" }],
  });

  /**/
  g.buildPlatform("platf+amd64").merge({
    name: "AMD64",
    websites: [{ kind: "wikipedia", title: "AMD64", href: "https://en.wikipedia.org/wiki/AMD64" }],
  });

  /**/
}
