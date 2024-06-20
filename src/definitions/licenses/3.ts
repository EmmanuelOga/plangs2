import type { PlangsGraph } from "../../entities/plangs_graph";

export function define(g: PlangsGraph) {
	const lb = g.licenseBuilder;

	lb.declare("license+3-clause-bsd", "3-clause BSD", [
		{
			kind: "wikipedia",
			title: "3-clause BSD",
			href: "https://en.wikipedia.org/wiki/3-clause_BSD",
		},
	]);
}
