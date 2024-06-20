import type { PlangsGraph } from "../../entities/plangs_graph";

export function define(g: PlangsGraph) {
	const tb = g.typeSystemBuilder;

	tb.declare("tsys+inferred", "Inferred", [
		{
			title: "${name} Type System",
			href: "https://en.wikipedia.org/wiki/type_inference",
			kind: "wikipedia",
		},
	]);
}
