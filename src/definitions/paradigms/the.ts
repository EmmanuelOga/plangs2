import type { PlangsGraph } from "../../entities/plangs_graph";

export function define(g: PlangsGraph) {
	const lb = g.paradigmBuilder;

	lb.define("para+the", "task-driven", {
		websites: [
			{
				kind: "wikipedia",
				title: "task-driven",
				href: "https://en.wikipedia.org/wiki/The_Task-based_Asynchronous_Pattern",
			},
		],
	});
}
