import type { PlangsGraph } from "../../../entities/plangs_graph";
import type { T_Id_V_Platform } from "../../../entities/schemas";

export const PLATFORM_V_Id = "platf+dos" as T_Id_V_Platform;

export function define(g: PlangsGraph) {
	const pf = g.v_platform.declare(PLATFORM_V_Id);

	pf.name = "PC DOS";

	const pfb = g.platformBuilder;

	pfb.addWebsites(pf, [
		{
			kind: "wikipedia",
			title: "MS-DOS",
			href: "https://en.wikipedia.org/wiki/MS-DOS",
		},
		{
			kind: "wikipedia",
			title: "DOS",
			href: "https://en.wikipedia.org/wiki/DOS",
		},
		{
			kind: "wikipedia",
			title: "Microsoft DOS",
			href: "https://en.wikipedia.org/wiki/Microsoft_DOS",
		},
		{
			kind: "wikipedia",
			title: "iPadOS",
			href: "https://en.wikipedia.org/wiki/IPadOS",
		},
		{
			kind: "wikipedia",
			title: "PC DOS",
			href: "https://en.wikipedia.org/wiki/PC_DOS",
		},
	]);
}
