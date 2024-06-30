import type { PlangsGraph } from "../../entities/plangs_graph";

export function define(g: PlangsGraph) {
	const lb = g.paradigmBuilder;

	lb.define("para+structured", "structured", {
		websites: [
			{
				kind: "wikipedia",
				title: "structured",
				href: "https://en.wikipedia.org/wiki/Structured_programming",
			},
		],
	});
}
