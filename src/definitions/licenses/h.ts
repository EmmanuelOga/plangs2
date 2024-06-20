import type { PlangsGraph } from "../../entities/plangs_graph";

export function define(g: PlangsGraph) {
	const lb = g.licenseBuilder;

	lb.define(
		"license+historical-permission-notice-and-disclaimer",
		"Historical Permission Notice and Disclaimer",
		[
			{
				kind: "wikipedia",
				title: "Historical Permission Notice and Disclaimer",
				href: "https://en.wikipedia.org/wiki/Historical_Permission_Notice_and_Disclaimer",
			},
		],
	);
}
