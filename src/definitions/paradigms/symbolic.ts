import type { PlangsGraph } from "../../entities/plangs_graph";

export function define(g: PlangsGraph) {
	const lb = g.paradigmBuilder;

	lb.define("para+symbolic", "symbolic", {
		websites: [
			{
				kind: "wikipedia",
				title: "symbolic",
				href: "https://en.wikipedia.org/wiki/Symbolic_programming",
			},
		],
	});
}
