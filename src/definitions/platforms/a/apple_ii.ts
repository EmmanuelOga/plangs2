import type { PlangsGraph } from "../../../entities/plangs_graph";
import type { T_Id_V_Platform } from "../../../entities/schemas";

export const PLATFORM_V_Id = "platf+apple_ii" as T_Id_V_Platform;

export function define(g: PlangsGraph) {
  const pf = g.v_platform.declare(PLATFORM_V_Id);

  pf.name = "Apple IIGS";

  const pfb = g.platformBuilder;

  pfb.addWebsites(pf, [
    {
      kind: "wikipedia",
      title: "Apple II series",
      href: "https://en.wikipedia.org/wiki/Apple_II_series",
    },
    {
      kind: "wikipedia",
      title: "Apple II",
      href: "https://en.wikipedia.org/wiki/Apple_II",
    },
    {
      kind: "wikipedia",
      title: "Apple IIGS",
      href: "https://en.wikipedia.org/wiki/Apple_IIGS",
    },
  ]);
}
