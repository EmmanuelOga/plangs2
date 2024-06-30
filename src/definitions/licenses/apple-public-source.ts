import type { PlangsGraph } from "../../entities/plangs_graph";

export function define(g: PlangsGraph) {
	const lb = g.licenseBuilder;

	lb.define("lic+apple-public-source", "APSL", {
		websites: [
			{
				kind: "wikipedia",
				title: "APSL",
				href: "https://en.wikipedia.org/wiki/Apple_Public_Source_License",
			},
		],
	});
}
