import type { PlangsGraph } from "../../entities/plangs_graph";

export function define(g: PlangsGraph) {
	const lb = g.licenseBuilder;

	lb.declare("license+windows", "Windows", [
		{
			kind: "wikipedia",
			title: "Windows",
			href: "https://en.wikipedia.org/wiki/Microsoft_Windows",
		},
	]);
}
