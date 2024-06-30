import type { PlangsGraph } from "../../entities/plangs_graph";

export function define(g: PlangsGraph) {
	const lb = g.paradigmBuilder;

	lb.define("para+reflection", "reflective", {
		websites: [
			{
				kind: "wikipedia",
				title: "Reflective",
				href: "https://en.wikipedia.org/wiki/Reflection_(computer_science)",
			},
			{
				kind: "wikipedia",
				title: "reflective",
				href: "https://en.wikipedia.org/wiki/Reflection_(computer_programming)",
			},
		],
	});
}
