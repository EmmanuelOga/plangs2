import type { PlangsGraph } from "../../entities/plangs_graph";

export function define(g: PlangsGraph) {
	const lb = g.typeSystemBuilder;

	lb.define("tsys+generic", "Generic", {
		websites: [
			{
				title: "Generic Type System",
				href: "https://en.wikipedia.org/wiki/generic_programming",
				kind: "wikipedia",
			},
		],
	});
}
