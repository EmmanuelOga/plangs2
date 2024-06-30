import type { PlangsGraph } from "../../entities/plangs_graph";

export function define(g: PlangsGraph) {
	const lb = g.licenseBuilder;

	lb.define("lic+boost", "Boost", {
		websites: [
			{
				kind: "wikipedia",
				title: "Boost",
				href: "https://en.wikipedia.org/wiki/Boost_Software_License",
			},
		],
	});
}
