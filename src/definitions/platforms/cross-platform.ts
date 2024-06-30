import type { PlangsGraph } from "../../entities/plangs_graph";

export function define(g: PlangsGraph) {
  g.buildPlatform("platf+cross-platform").merge({
    name: "Cross-platform",
    websites: [
      { kind: "wikipedia", title: "Cross-platform", href: "https://en.wikipedia.org/wiki/Cross-platform" },
      { kind: "wikipedia", title: "Cross-platform", href: "https://en.wikipedia.org/wiki/Cross-platform_software" },
      { kind: "wikipedia", title: "Cross platform", href: "https://en.wikipedia.org/wiki/Cross_platform" },
      { kind: "wikipedia", title: "Platform independent", href: "https://en.wikipedia.org/wiki/Platform_independent" },
    ],
  });

  /**/
}
