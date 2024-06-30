import type { PlangsGraph } from "../../entities/plangs_graph";

export function define(g: PlangsGraph) {
	const lb = g.paradigmBuilder;

	lb.define("para+array", "Array", {
		websites: [
			{
				kind: "wikipedia",
				title: "Array",
				href: "https://en.wikipedia.org/wiki/Array_programming",
			},
		],
	});
}
