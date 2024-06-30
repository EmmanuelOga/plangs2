import type { PlangsGraph } from "../../entities/plangs_graph";

export function define(g: PlangsGraph) {
  const lb = g.platformBuilder;

  lb.define("platf+amd", "AMD", {
    websites: [{ kind: "wikipedia", title: "AMD", href: "https://en.wikipedia.org/wiki/Advanced_Micro_Devices" }],
  });

  lb.define("platf+amd-am2900", "2901", {
    websites: [{ kind: "wikipedia", title: "2901", href: "https://en.wikipedia.org/wiki/AMD_Am2900" }],
  });

  lb.define("platf+amd64", "AMD64", {
    websites: [{ kind: "wikipedia", title: "AMD64", href: "https://en.wikipedia.org/wiki/AMD64" }],
  });
}
