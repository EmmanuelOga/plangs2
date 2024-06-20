import type { PlangsGraph } from "../../../entities/plangs_graph";
import type { T_Id_V_Platform } from "../../../entities/schemas";

export const PLATFORM_V_Id = "platf+cross-platform" as T_Id_V_Platform;

export function define(g: PlangsGraph) {
	const pf = g.v_platform.declare(PLATFORM_V_Id);

	pf.name = "Cross-platform";

	const pfb = g.platformBuilder;

	pfb.addWebsites(pf, [
		{
			kind: "wikipedia",
			title: "Cross-platform",
			href: "https://en.wikipedia.org/wiki/Cross-platform",
		},
		{
			kind: "wikipedia",
			title: "cross-platform",
			href: "https://en.wikipedia.org/wiki/Cross-platform_software",
		},
		{
			kind: "wikipedia",
			title: "Platform independent",
			href: "https://en.wikipedia.org/wiki/Platform_independent",
		},
		{
			kind: "wikipedia",
			title: "Cross platform",
			href: "https://en.wikipedia.org/wiki/Cross_platform",
		},
	]);
}
