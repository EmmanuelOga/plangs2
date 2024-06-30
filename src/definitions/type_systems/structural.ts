import type { PlangsGraph } from "../../entities/plangs_graph";

export function define(g: PlangsGraph) {
	const lb = g.typeSystemBuilder;

	lb.define("tsys+structural", "Structural", {
		websites: [
			{
				title: "Structural Type System",
				href: "https://en.wikipedia.org/wiki/structural_type_system",
				kind: "wikipedia",
			},
		],
	});
}
