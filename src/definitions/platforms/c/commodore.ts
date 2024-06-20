import type { PlangsGraph } from "../../../entities/plangs_graph";
import type { T_Id_V_Platform } from "../../../entities/schemas";

export const PLATFORM_V_Id = "platf+commodore" as T_Id_V_Platform;

export function define(g: PlangsGraph) {
  const pf = g.v_platform.declare(PLATFORM_V_Id);

  pf.name = "Commodore 128";

  const pfb = g.platformBuilder;

  pfb.addWebsites(pf, [
    {
      kind: "wikipedia",
      title: "PET",
      href: "https://en.wikipedia.org/wiki/Commodore_PET",
    },
    {
      kind: "wikipedia",
      title: "Commodore 128",
      href: "https://en.wikipedia.org/wiki/Commodore_128",
    },
  ]);
}
