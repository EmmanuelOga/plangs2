import type { PlangsGraph } from "../../entities/plangs_graph";

export function define(g: PlangsGraph) {
	const lb = g.platformBuilder;

	lb.define("platf+rocm", "ROCm", {
		websites: [
			{
				kind: "wikipedia",
				title: "ROCm",
				href: "https://en.wikipedia.org/wiki/ROCm",
			},
		],
	});
}
