import type { PlangsGraph } from "../../entities/plangs_graph";

export function define(g: PlangsGraph) {
	const tb = g.typeSystemBuilder;

	tb.declare("tsys+safe", "Safe", [
		{
			title: "${name} Type System",
			href: "https://en.wikipedia.org/wiki/type_safety",
			kind: "wikipedia",
		},
	]);

	tb.declare("tsys+static", "Static", [
		{
			title: "${name} Type System",
			href: "https://en.wikipedia.org/wiki/static_typing",
			kind: "wikipedia",
		},
	]);

	tb.declare("tsys+strong", "Strong", [
		{
			title: "${name} Type System",
			href: "https://en.wikipedia.org/wiki/strong_typing",
			kind: "wikipedia",
		},
	]);

	tb.declare("tsys+structural", "Structural", [
		{
			title: "${name} Type System",
			href: "https://en.wikipedia.org/wiki/structural_type_system",
			kind: "wikipedia",
		},
	]);
}
