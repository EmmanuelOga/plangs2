import type { PlangsGraph } from "../../entities/plangs_graph";

export function define(g: PlangsGraph) {
	const tb = g.typeSystemBuilder;

	tb.define("tsys+flow-sensitive", "Flow-Sensitive", [
		{
			title: "${name} Type System",
			href: "https://en.wikipedia.org/wiki/flow-sensitive_typing",
			kind: "wikipedia",
		},
	]);
}
