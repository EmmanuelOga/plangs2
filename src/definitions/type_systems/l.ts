import type { PlangsGraph } from "../../entities/plangs_graph";

export function define(g: PlangsGraph) {
	const tb = g.typeSystemBuilder;

	tb.define("tsys+latent", "Latent", [
		{
			title: "${name} Type System",
			href: "https://en.wikipedia.org/wiki/latent_typing",
			kind: "wikipedia",
		},
	]);
}
