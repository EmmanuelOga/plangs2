import type { PlangsGraph } from "../../entities/plangs_graph";

export function define(g: PlangsGraph) {
	const lb = g.typeSystemBuilder;

	lb.define("tsys+gradual", "Gradual", {
		websites: [
			{
				title: "Gradual Type System",
				href: "https://en.wikipedia.org/wiki/gradual_typing",
				kind: "wikipedia",
			},
		],
	});
}
