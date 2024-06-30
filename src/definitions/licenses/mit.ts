import type { PlangsGraph } from "../../entities/plangs_graph";

export function define(g: PlangsGraph) {
	const lb = g.licenseBuilder;

	lb.define("lic+mit", "MIT", {
		websites: [
			{
				kind: "wikipedia",
				title: "MIT",
				href: "https://en.wikipedia.org/wiki/MIT_License",
			},
		],
	});
}
