import type { PlangsGraph } from "../../../entities/plangs_graph";
import type { T_Id_V_Platform } from "../../../entities/schemas";

export const PLATFORM_V_Id = "platf+unix" as T_Id_V_Platform;

export function define(g: PlangsGraph) {
	const pf = g.v_platform.declare(PLATFORM_V_Id);

	pf.name = "UNIX";

	const pfb = g.platformBuilder;

	pfb.addWebsites(pf, [
		{
			kind: "wikipedia",
			title: "Unix",
			href: "https://en.wikipedia.org/wiki/Unix",
		},
		{
			kind: "wikipedia",
			title: "Unix-like",
			href: "https://en.wikipedia.org/wiki/Unix-like",
		},
		{
			kind: "wikipedia",
			title: "Version 10 Unix",
			href: "https://en.wikipedia.org/wiki/Version_10_Unix",
		},
		{
			kind: "wikipedia",
			title: "UNIX",
			href: "https://en.wikipedia.org/wiki/UNIX",
		},
	]);
}
