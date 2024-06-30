import type { PlangsGraph } from "../../entities/plangs_graph";

export function define(g: PlangsGraph) {
	const lb = g.platformBuilder;

	lb.define("platf+oneapi", "oneAPI", {
		websites: [
			{
				kind: "wikipedia",
				title: "oneAPI",
				href: "https://en.wikipedia.org/wiki/OneAPI_(compute_acceleration)",
			},
		],
	});
}
