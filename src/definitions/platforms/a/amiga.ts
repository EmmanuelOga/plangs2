import type { PlangsGraph } from "../../../entities/plangs_graph";
import type { T_Id_V_Platform } from "../../../entities/schemas";

export const PLATFORM_V_Id = "platf+amiga" as T_Id_V_Platform;

export function define(g: PlangsGraph) {
  const pf = g.v_platform.declare(PLATFORM_V_Id);

  pf.name = "Amiga";

  const pfb = g.platformBuilder;

  pfb.addWebsites(pf, [
    {
      kind: "wikipedia",
      title: "AmigaOS",
      href: "https://en.wikipedia.org/wiki/AmigaOS",
    },
    {
      kind: "wikipedia",
      title: "Amiga",
      href: "https://en.wikipedia.org/wiki/Amiga",
    },
  ]);
}
