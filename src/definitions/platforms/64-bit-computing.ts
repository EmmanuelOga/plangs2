import type { PlangsGraph } from "../../entities/plangs_graph";

export function define(g: PlangsGraph) {
	const lb = g.platformBuilder;

	lb.define("platf+64-bit-computing", "64-bit", {
		websites: [
			{
				kind: "wikipedia",
				title: "64-bit",
				href: "https://en.wikipedia.org/wiki/64-bit_computing",
			},
		],
	});
}
