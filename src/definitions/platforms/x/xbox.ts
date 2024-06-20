import type { PlangsGraph } from "../../../entities/plangs_graph";
import type { T_Id_V_Platform } from "../../../entities/schemas";

export const PLATFORM_V_Id = "platf+xbox" as T_Id_V_Platform;

export function define(g: PlangsGraph) {
  const pf = g.v_platform.declare(PLATFORM_V_Id);

  pf.name = "Xbox Series X/S";

  const pfb = g.platformBuilder;

  pfb.addWebsites(pf, [
    {
      kind: "wikipedia",
      title: "Xbox One",
      href: "https://en.wikipedia.org/wiki/Xbox_One",
    },
    {
      kind: "wikipedia",
      title: "Xbox Series X/S",
      href: "https://en.wikipedia.org/wiki/Xbox_Series_X_and_Series_S",
    },
  ]);
}
