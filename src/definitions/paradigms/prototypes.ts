import type { PlangsGraph } from "../../entities/plangs_graph";

export function define(g: PlangsGraph) {
	const lb = g.paradigmBuilder;

	lb.define("para+prototypes", "prototype-based", {
		websites: [
			{
				kind: "wikipedia",
				title: "prototype-based",
				href: "https://en.wikipedia.org/wiki/Prototype-based_programming",
			},
			{
				kind: "wikipedia",
				title: "prototype-based",
				href: "https://en.wikipedia.org/wiki/Prototype-oriented_programming",
			},
		],
	});
}
