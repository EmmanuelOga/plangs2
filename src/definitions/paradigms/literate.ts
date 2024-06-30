import type { PlangsGraph } from "../../entities/plangs_graph";

export function define(g: PlangsGraph) {
	const lb = g.paradigmBuilder;

	lb.define("para+literate", "Literate", {
		websites: [
			{
				kind: "wikipedia",
				title: "Literate",
				href: "https://en.wikipedia.org/wiki/Literate_programming",
			},
		],
	});
}
