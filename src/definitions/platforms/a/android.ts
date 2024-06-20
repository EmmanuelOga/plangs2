import type { PlangsGraph } from "../../../entities/plangs_graph";
import type { T_Id_V_Platform } from "../../../entities/schemas";

export const PLATFORM_V_Id = "platf+android" as T_Id_V_Platform;

export function define(g: PlangsGraph) {
  const pf = g.v_platform.declare(PLATFORM_V_Id);

  pf.name = "Android";

  const pfb = g.platformBuilder;

  pfb.addWebsites(pf, [
    {
      kind: "wikipedia",
      title: "Android",
      href: "https://en.wikipedia.org/wiki/Android_(operating_system)",
    },
    {
      kind: "wikipedia",
      title: "Android TV",
      href: "https://en.wikipedia.org/wiki/Android_TV",
    },
    {
      kind: "wikipedia",
      title: "Android",
      href: "https://en.wikipedia.org/wiki/Google_Android",
    },
  ]);
}
