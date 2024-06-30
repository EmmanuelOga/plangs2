import type { PlangsGraph } from "../../entities/plangs_graph";

export function define(g: PlangsGraph) {
	const lb = g.paradigmBuilder;

	lb.define("para+natural", "natural language programming", {
		websites: [
			{
				kind: "wikipedia",
				title: "Natural language programming",
				href: "https://en.wikipedia.org/wiki/Natural_language_programming",
			},
			{
				kind: "wikipedia",
				title: "natural-language",
				href: "https://en.wikipedia.org/wiki/Natural-language_programming",
			},
		],
	});
}
