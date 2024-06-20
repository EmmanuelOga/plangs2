import type { PlangsGraph } from "../../../entities/plangs_graph";
import type { T_Id_V_Platform } from "../../../entities/schemas";

export const PLATFORM_V_Id = "platf+aarch64" as T_Id_V_Platform;

export function define(g: PlangsGraph) {
  const pf = g.v_platform.declare(PLATFORM_V_Id);

  pf.name = "AArch64";

  const pfb = g.platformBuilder;

  pfb.addWebsites(pf, [
    {
      kind: "wikipedia",
      title: "Aarch64",
      href: "https://en.wikipedia.org/wiki/Aarch64",
    },
    {
      kind: "wikipedia",
      title: "AArch64",
      href: "https://en.wikipedia.org/wiki/AArch64",
    },
  ]);
}
