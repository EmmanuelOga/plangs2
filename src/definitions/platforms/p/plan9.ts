import type { PlangsGraph } from "../../../entities/plangs_graph";
import type { T_Id_V_Platform } from "../../../entities/schemas";

export const PLATFORM_V_Id = "platf+plan9" as T_Id_V_Platform;

export function define(g: PlangsGraph) {
	const pf = g.v_platform.declare(PLATFORM_V_Id);

	pf.name = "Plan 9 from User Space";

	const pfb = g.platformBuilder;

	pfb.addWebsites(pf, [
		{
			kind: "wikipedia",
			title: "Plan 9",
			href: "https://en.wikipedia.org/wiki/Plan_9_from_Bell_Labs",
		},
		{
			kind: "wikipedia",
			title: "Plan 9 from User Space",
			href: "https://en.wikipedia.org/wiki/Plan_9_from_User_Space",
		},
	]);
}
