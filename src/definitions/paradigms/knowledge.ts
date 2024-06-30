import type { PlangsGraph } from "../../entities/plangs_graph";

export function define(g: PlangsGraph) {
	const lb = g.paradigmBuilder;

	lb.define("para+knowledge", "knowledge representation", {
		websites: [
			{
				kind: "wikipedia",
				title: "knowledge representation",
				href: "https://en.wikipedia.org/wiki/Knowledge_representation",
			},
		],
	});
}
