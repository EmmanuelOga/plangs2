import type { PlangsGraph } from "../../entities/plangs_graph";

export function define(g: PlangsGraph) {
	const lb = g.paradigmBuilder;

	lb.define("para+production", "rule processing", {
		websites: [
			{
				kind: "wikipedia",
				title: "rule processing",
				href: "https://en.wikipedia.org/wiki/Production_system_(computer_science)",
			},
		],
	});
}
