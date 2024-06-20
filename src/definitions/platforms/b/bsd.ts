import type { PlangsGraph } from "../../../entities/plangs_graph";
import type { T_Id_V_Platform } from "../../../entities/schemas";

export const PLATFORM_V_Id = "platf+bsd" as T_Id_V_Platform;

export function define(g: PlangsGraph) {
  const pf = g.v_platform.declare(PLATFORM_V_Id);

  pf.name = "BSD";

  const pfb = g.platformBuilder;

  pfb.addWebsites(pf, [
    {
      kind: "wikipedia",
      title: "BSD",
      href: "https://en.wikipedia.org/wiki/Berkeley_Software_Distribution",
    },
    {
      kind: "wikipedia",
      title: "FreeBSD",
      href: "https://en.wikipedia.org/wiki/FreeBSD",
    },
    {
      kind: "wikipedia",
      title: "NetBSD",
      href: "https://en.wikipedia.org/wiki/NetBSD",
    },
    {
      kind: "wikipedia",
      title: "DragonFly BSD",
      href: "https://en.wikipedia.org/wiki/DragonFly_BSD",
    },
    {
      kind: "wikipedia",
      title: "OpenBSD",
      href: "https://en.wikipedia.org/wiki/OpenBSD",
    },
    {
      kind: "wikipedia",
      title: "BSD",
      href: "https://en.wikipedia.org/wiki/BSD",
    },
    {
      kind: "wikipedia",
      title: "DragonflyBSD",
      href: "https://en.wikipedia.org/wiki/DragonflyBSD",
    },
  ]);
}
