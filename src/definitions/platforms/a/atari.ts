import type { PlangsGraph } from "../../../entities/plangs_graph";
import type { T_Id_V_Platform } from "../../../entities/schemas";

export const PLATFORM_V_Id = "platf+atari" as T_Id_V_Platform;

export function define(g: PlangsGraph) {
  const pf = g.v_platform.declare(PLATFORM_V_Id);

  pf.name = "Atari TOS";

  const pfb = g.platformBuilder;

  pfb.addWebsites(pf, [
    {
      kind: "wikipedia",
      title: "Atari 8-bit computers",
      href: "https://en.wikipedia.org/wiki/Atari_8-bit_computers",
    },
    {
      kind: "wikipedia",
      title: "Atari 8-bit",
      href: "https://en.wikipedia.org/wiki/Atari_8-bit",
    },
    {
      kind: "wikipedia",
      title: "Atari TOS",
      href: "https://en.wikipedia.org/wiki/Atari_TOS",
    },
    {
      kind: "wikipedia",
      title: "GEMDOS",
      href: "https://en.wikipedia.org/wiki/Atari_ST#Operating_system",
    },
  ]);
}
