import type { PlangsGraph } from "../../entities/plangs_graph";

export function define(g: PlangsGraph) {
	const lb = g.licenseBuilder;

	lb.define("lic+eclipse-public", "EPL", {
		websites: [
			{
				kind: "wikipedia",
				title: "Eclipse Public",
				href: "https://en.wikipedia.org/wiki/Eclipse_Public_License",
			},
		],
	});
}
