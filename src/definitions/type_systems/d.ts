import type { PlangsGraph } from "../../entities/plangs_graph";

export function define(g: PlangsGraph) {
	const tb = g.typeSystemBuilder;

	tb.define("tsys+dependent", "Dependent", [
		{
			title: "${name} Type System",
			href: "https://en.wikipedia.org/wiki/dependent_type",
			kind: "wikipedia",
		},
	]);

	tb.define("tsys+duck", "Duck", [
		{
			title: "${name} Type System",
			href: "https://en.wikipedia.org/wiki/duck_typing",
			kind: "wikipedia",
		},
	]);

	tb.define("tsys+dynamic", "Dynamic", [
		{
			title: "${name} Type System",
			href: "https://en.wikipedia.org/wiki/dynamic_typing",
			kind: "wikipedia",
		},
	]);
}
