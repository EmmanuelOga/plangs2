import type { PlangsGraph } from "../../entities/plangs_graph";

export function define(g: PlangsGraph) {
	const tb = g.typeSystemBuilder;

	tb.declare("tsys+manifest", "Manifest", [
		{
			title: "${name} Type System",
			href: "https://en.wikipedia.org/wiki/manifest_typing",
			kind: "wikipedia",
		},
	]);
}
