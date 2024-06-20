import type { PlangsGraph } from "../../entities/plangs_graph";

export const PLATFORM_V_Id = "platf+ia-32" as T_Id_V_Platform;

export function define(g: PlangsGraph) {
	const pf = g.v_platform.declare(PLATFORM_V_Id);

	pf.name = "IA-32";

	const pfb = g.platformBuilder;

	pfb.addWebsites(pf, [
		{
			kind: "wikipedia",
			title: "IA-32",
			href: "https://en.wikipedia.org/wiki/IA-32",
		},
	]);
}
