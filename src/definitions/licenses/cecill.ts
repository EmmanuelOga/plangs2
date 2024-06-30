import type { PlangsGraph } from "../../entities/plangs_graph";

export function define(g: PlangsGraph) {
	const lb = g.licenseBuilder;

	lb.define("lic+cecill", "CeCILL", {
		websites: [
			{
				kind: "wikipedia",
				title: "CeCILL",
				href: "https://en.wikipedia.org/wiki/CeCILL",
			},
		],
	});
}
