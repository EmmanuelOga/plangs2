import type { PlangsGraph } from "../../../entities/plangs_graph";
import type { T_Id_V_Platform } from "../../../entities/schemas";

export const PLATFORM_V_Id = "platf+playstation" as T_Id_V_Platform;

export function define(g: PlangsGraph) {
	const pf = g.v_platform.declare(PLATFORM_V_Id);

	pf.name = "PlayStation 3";

	const pfb = g.platformBuilder;

	pfb.addWebsites(pf, [
		{
			kind: "wikipedia",
			title: "PlayStation 4",
			href: "https://en.wikipedia.org/wiki/PlayStation_4",
		},
		{
			kind: "wikipedia",
			title: "PlayStation 5",
			href: "https://en.wikipedia.org/wiki/PlayStation_5",
		},
		{
			kind: "wikipedia",
			title: "PlayStation 2",
			href: "https://en.wikipedia.org/wiki/PlayStation_2",
		},
		{
			kind: "wikipedia",
			title: "PlayStation Portable",
			href: "https://en.wikipedia.org/wiki/PlayStation_Portable",
		},
		{
			kind: "wikipedia",
			title: "PlayStation 3",
			href: "https://en.wikipedia.org/wiki/PlayStation_3",
		},
	]);
}
