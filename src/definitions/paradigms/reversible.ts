import type { PlangsGraph } from "../../entities/plangs_graph";

export function define(g: PlangsGraph) {
	const lb = g.paradigmBuilder;

	lb.define("para+reversible", "reversible", {
		websites: [
			{
				kind: "wikipedia",
				title: "reversible",
				href: "https://en.wikipedia.org/wiki/Reversible_computing",
			},
		],
	});
}
