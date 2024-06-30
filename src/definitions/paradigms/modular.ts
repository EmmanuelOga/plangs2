import type { PlangsGraph } from "../../entities/plangs_graph";

export function define(g: PlangsGraph) {
	const lb = g.paradigmBuilder;

	lb.define("para+modular", "modular", {
		websites: [
			{
				kind: "wikipedia",
				title: "modular",
				href: "https://en.wikipedia.org/wiki/Modular_programming",
			},
		],
	});
}
