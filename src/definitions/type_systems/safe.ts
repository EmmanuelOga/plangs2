import type { PlangsGraph } from "../../entities/plangs_graph";

export function define(g: PlangsGraph) {
	const lb = g.typeSystemBuilder;

	lb.define("tsys+safe", "Safe", {
		websites: [
			{
				title: "Safe Type System",
				href: "https://en.wikipedia.org/wiki/type_safety",
				kind: "wikipedia",
			},
		],
	});
}
