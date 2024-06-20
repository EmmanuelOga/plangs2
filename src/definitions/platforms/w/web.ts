import type { PlangsGraph } from "../../../entities/plangs_graph";
import type { T_Id_V_Platform } from "../../../entities/schemas";

export const PLATFORM_V_Id = "platf+web" as T_Id_V_Platform;

export function define(g: PlangsGraph) {
	const pf = g.v_platform.declare(PLATFORM_V_Id);

	pf.name = "WebAssembly";

	const pfb = g.platformBuilder;

	pfb.addWebsites(pf, [
		{
			kind: "wikipedia",
			title: "Web browser",
			href: "https://en.wikipedia.org/wiki/Web_browser",
		},
		{
			kind: "wikipedia",
			title: "Amazon Web Services",
			href: "https://en.wikipedia.org/wiki/Amazon_Web_Services",
		},
		{
			kind: "wikipedia",
			title: "Web platform",
			href: "https://en.wikipedia.org/wiki/Web_platform",
		},
		{
			kind: "wikipedia",
			title: "browser-based",
			href: "https://en.wikipedia.org/wiki/Web_application",
		},
		{
			kind: "wikipedia",
			title: "WebAssembly",
			href: "https://en.wikipedia.org/wiki/WebAssembly",
		},
		{
			kind: "wikipedia",
			title: "HTML5",
			href: "https://en.wikipedia.org/wiki/HTML5",
		},
	]);
}
