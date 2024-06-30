import type { PlangsGraph } from "../../entities/plangs_graph";

export function define(g: PlangsGraph) {
	const lb = g.platformBuilder;

	lb.define("platf+cuda", "CUDA", {
		websites: [
			{
				kind: "wikipedia",
				title: "CUDA",
				href: "https://en.wikipedia.org/wiki/CUDA",
			},
		],
	});
}
