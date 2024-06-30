import type { PlangsGraph } from "../../entities/plangs_graph";

export function define(g: PlangsGraph) {
	const lb = g.paradigmBuilder;

	lb.define("para+interface", "protocol-oriented", {
		websites: [
			{
				kind: "wikipedia",
				title: "protocol-oriented",
				href: "https://en.wikipedia.org/wiki/Interface_(object-oriented_programming)",
			},
		],
	});
}
