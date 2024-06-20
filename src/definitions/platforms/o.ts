import type { PlangsGraph } from "../../entities/plangs_graph";

export function define(g: PlangsGraph) {
  const lb = g.platformBuilder;

  lb.define("platf+oneapi", "oneAPI", [
    {
      kind: "wikipedia",
      title: "oneAPI",
      href: "https://en.wikipedia.org/wiki/OneAPI_(compute_acceleration)",
    },
  ]);

  lb.define("platf+openvms", "VMS", [
    { kind: "wikipedia", title: "OpenVMS", href: "https://en.wikipedia.org/wiki/OpenVMS" },
  ]);
}
