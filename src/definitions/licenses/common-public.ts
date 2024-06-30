import type { PlangsGraph } from "../../entities/plangs_graph";

export function define(g: PlangsGraph) {
	const lb = g.licenseBuilder;

	lb.define("lic+common-public", "CPL", {
		websites: [
			{
				kind: "wikipedia",
				title: "CPL",
				href: "https://en.wikipedia.org/wiki/Common_Public_License",
			},
		],
	});
}
