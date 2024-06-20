import type { PlangsGraph } from "../../../entities/plangs_graph";

export function define(g: PlangsGraph) {
	const lb = g.licenseBuilder;

	lb.declare("license+ruby", "Ruby License", [
		{
			kind: "wikipedia",
			title: "Ruby License",
			href: "https://en.wikipedia.org/wiki/Ruby_License",
		},
	]);
}
