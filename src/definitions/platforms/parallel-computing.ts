import type { PlangsGraph } from "../../entities/plangs_graph";

export function define(g: PlangsGraph) {
	const lb = g.platformBuilder;

	lb.define("platf+parallel-computing", "Parallel", {
		websites: [
			{
				kind: "wikipedia",
				title: "Parallel",
				href: "https://en.wikipedia.org/wiki/Parallel_computing",
			},
		],
	});
}
