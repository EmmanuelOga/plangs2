import type { PlangsGraph } from "../../entities/plangs_graph";

export function define(g: PlangsGraph) {
	const tb = g.typeSystemBuilder;

	tb.define("tsys+object-oriented", "Object-Oriented", [
		{
			title: "${name} Type System",
			href: "https://en.wikipedia.org/wiki/object_(computer_science)",
			kind: "wikipedia",
		},
	]);

	tb.define("tsys+optional", "Optional", [
		{
			title: "${name} Type System",
			href: "https://en.wikipedia.org/wiki/optional_typing",
			kind: "wikipedia",
		},
	]);
}
