import type { PlangsGraph } from "../../../entities/plangs_graph";
import type { T_Id_V_Platform } from "../../../entities/schemas";

export const PLATFORM_V_Id = "platf+axiom" as T_Id_V_Platform;

export function define(g: PlangsGraph) {
  const pf = g.v_platform.declare(PLATFORM_V_Id);

  pf.name = "Axiom computer algebra system";

  const pfb = g.platformBuilder;

  pfb.addWebsites(pf, [
    {
      kind: "wikipedia",
      title: "Axiom computer algebra system",
      href: "https://en.wikipedia.org/wiki/Axiom_(computer_algebra_system)",
    },
  ]);
}
