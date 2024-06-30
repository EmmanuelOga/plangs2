import type { PlangsGraph } from "../../entities/plangs_graph";

export function define(g: PlangsGraph) {
	const lb = g.licenseBuilder;

	lb.define("lic+isc", "ISC", {
		websites: [
			{
				kind: "wikipedia",
				title: "ISC",
				href: "https://en.wikipedia.org/wiki/ISC_license",
			},
		],
	});
}
