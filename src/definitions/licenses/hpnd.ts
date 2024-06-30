import type { PlangsGraph } from "../../entities/plangs_graph";

export function define(g: PlangsGraph) {
	const lb = g.licenseBuilder;

	lb.define("lic+hpnd", "Historical Permission Notice and Disclaimer", {
		websites: [
			{
				kind: "wikipedia",
				title: "Historical Permission Notice and Disclaimer",
				href: "https://en.wikipedia.org/wiki/Historical_Permission_Notice_and_Disclaimer",
			},
		],
	});
}
