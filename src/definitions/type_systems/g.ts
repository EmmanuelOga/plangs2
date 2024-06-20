import type { PlangsGraph } from "../../entities/plangs_graph";

export function define(g: PlangsGraph) {
	const tb = g.typeSystemBuilder;

	tb.declare("tsys+generic", "Generic", [
		{
			title: "${name} Type System",
			href: "https://en.wikipedia.org/wiki/generic_programming",
			kind: "wikipedia",
		},
	]);

	tb.declare("tsys+gradual", "Gradual", [
		{
			title: "${name} Type System",
			href: "https://en.wikipedia.org/wiki/gradual_typing",
			kind: "wikipedia",
		},
	]);
}
