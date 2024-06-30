import type { PlangsGraph } from "../../entities/plangs_graph";

export function define(g: PlangsGraph) {
	const lb = g.licenseBuilder;

	lb.define("lic+closed-source", "Closed source", {
		websites: [
			{
				kind: "wikipedia",
				title: "Closed source",
				href: "https://en.wikipedia.org/wiki/Closed_source",
			},
		],
	});
}
