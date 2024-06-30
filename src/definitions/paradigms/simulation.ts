import type { PlangsGraph } from "../../entities/plangs_graph";

export function define(g: PlangsGraph) {
	const lb = g.paradigmBuilder;

	lb.define("para+simulation", "simulation", {
		websites: [
			{
				kind: "wikipedia",
				title: "simulation",
				href: "https://en.wikipedia.org/wiki/Simulation_language",
			},
		],
	});
}
