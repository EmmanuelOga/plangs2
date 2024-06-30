import type { PlangsGraph } from "../../entities/plangs_graph";

export function define(g: PlangsGraph) {
	const lb = g.paradigmBuilder;

	lb.define("para+logic", "Logic Programming", {
		websites: [
			{
				kind: "wikipedia",
				title: "logic",
				href: "https://en.wikipedia.org/wiki/Logic_programming",
			},
			{
				kind: "wikipedia",
				title: "concurrent constraint logic",
				href: "https://en.wikipedia.org/wiki/Concurrent_constraint_logic_programming",
			},
		],
	});
}
