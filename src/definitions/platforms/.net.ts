import type { PlangsGraph } from "../../../entities/plangs_graph";
import type { T_Id_V_Platform } from "../../../entities/schemas";

export const PLATFORM_V_Id = "platf+.net" as T_Id_V_Platform;

export function define(g: PlangsGraph) {
  const pf = g.v_platform.declare(PLATFORM_V_Id);

  pf.name = ".NET Framework";

  const pfb = g.platformBuilder;

  pfb.addWebsites(pf, [
    {
      kind: "wikipedia",
      title: ".NET Framework",
      href: "https://en.wikipedia.org/wiki/.NET_Framework",
    },
    {
      kind: "wikipedia",
      title: ".NET",
      href: "https://en.wikipedia.org/wiki/.NET",
    },
    {
      kind: "wikipedia",
      title: "Microsoft .NET",
      href: "https://en.wikipedia.org/wiki/Microsoft_.NET",
    },
    {
      kind: "wikipedia",
      title: ".NET Framework 4.5",
      href: "https://en.wikipedia.org/wiki/.NET_Framework_4.5",
    },
  ]);
}
