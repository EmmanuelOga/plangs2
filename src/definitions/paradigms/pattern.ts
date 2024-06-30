import type { PlangsGraph } from "../../entities/plangs_graph";

export function define(g: PlangsGraph) {
	const lb = g.paradigmBuilder;

	lb.define("para+pattern", "Pattern-matching", {
		websites: [
			{
				kind: "wikipedia",
				title: "Pattern-matching",
				href: "https://en.wikipedia.org/wiki/Pattern-matching",
			},
		],
	});
}
