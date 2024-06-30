import type { PlangsGraph } from "../../entities/plangs_graph";

export function define(g: PlangsGraph) {
	const lb = g.licenseBuilder;

	lb.define("lic+q-public", "QPL", {
		websites: [
			{
				kind: "wikipedia",
				title: "QPL",
				href: "https://en.wikipedia.org/wiki/Q_Public_License",
			},
		],
	});
}
