import type { PlangsGraph } from "../../entities/plangs_graph";

export function define(g: PlangsGraph) {
	const tb = g.typeSystemBuilder;

	tb.declare("tsys+weak", "Weak", [
		{
			title: "${name} Type System",
			href: "https://en.wikipedia.org/wiki/weak_typing",
			kind: "wikipedia",
		},
	]);
}
