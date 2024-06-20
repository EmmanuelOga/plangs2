import type { PlangsGraph } from "../../entities/plangs_graph";

export function define(g: PlangsGraph) {
	const tb = g.typeSystemBuilder;

	tb.declare("tsys+hindley-milner", "Hindley-Milner", [
		{
			title: "${name} Type System",
			href: "https://en.wikipedia.org/wiki/hindley%e2%80%93milner_type_system",
			kind: "wikipedia",
		},
	]);
}
