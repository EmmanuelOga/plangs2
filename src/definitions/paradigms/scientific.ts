import type { PlangsGraph } from "../../entities/plangs_graph";

export function define(g: PlangsGraph) {
	const lb = g.paradigmBuilder;

	lb.define("para+scientific", "scientific workflow", {
		websites: [
			{
				kind: "wikipedia",
				title: "scientific workflow",
				href: "https://en.wikipedia.org/wiki/Scientific_workflow_system",
			},
		],
	});
}
