import type { PlangsGraph } from "../../../entities/plangs_graph";
import type { T_Id_V_Platform } from "../../../entities/schemas";

export const PLATFORM_V_Id = "platf+amazon_firetv" as T_Id_V_Platform;

export function define(g: PlangsGraph) {
	const pf = g.v_platform.declare(PLATFORM_V_Id);

	pf.name = "Amazon Fire TV";

	const pfb = g.platformBuilder;

	pfb.addWebsites(pf, [
		{
			kind: "wikipedia",
			title: "Amazon Fire TV",
			href: "https://en.wikipedia.org/wiki/Amazon_Fire_TV",
		},
	]);
}
