import type { PlangsGraph } from "../../entities/plangs_graph";

export function define(g: PlangsGraph) {
	const lb = g.licenseBuilder;

	lb.define("license+trialware", "Trialware", [
		{
			kind: "wikipedia",
			title: "Trialware",
			href: "https://en.wikipedia.org/wiki/Trialware",
		},
	]);
}
