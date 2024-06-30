import type { PlangsGraph } from "../../entities/plangs_graph";

export function define(g: PlangsGraph) {
	const lb = g.licenseBuilder;

	lb.define("lic+ios", "iOS", {
		websites: [
			{
				kind: "wikipedia",
				title: "iOS",
				href: "https://en.wikipedia.org/wiki/IOS",
			},
		],
	});
}
