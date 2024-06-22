import type { PlangsGraph } from "../../entities/plangs_graph";

export function define(g: PlangsGraph) {
  const lb = g.platformBuilder;

  //-------------------------------------------------------------------------------

  lb.define("platf+cross-platform", "Cross-platform", {
    websites: [
      { kind: "wikipedia", title: "Cross-platform", href: "https://en.wikipedia.org/wiki/Cross-platform" },
      { kind: "wikipedia", title: "cross-platform", href: "https://en.wikipedia.org/wiki/Cross-platform_software" },
      { kind: "wikipedia", title: "Platform independent", href: "https://en.wikipedia.org/wiki/Platform_independent" },
      { kind: "wikipedia", title: "Cross platform", href: "https://en.wikipedia.org/wiki/Cross_platform" },
    ],
  });
}
