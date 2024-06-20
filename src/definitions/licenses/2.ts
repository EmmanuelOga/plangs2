import type { PlangsGraph } from "../../entities/plangs_graph";

export function define(g: PlangsGraph) {
	const lb = g.licenseBuilder;

	lb.define("license+2-clause-bsd", "2-clause BSD License since 2020", [
		{
			kind: "wikipedia",
			title: "2-clause BSD License since 2020",
			href: "https://en.wikipedia.org/wiki/BSD_licenses",
		},
	]);
}
