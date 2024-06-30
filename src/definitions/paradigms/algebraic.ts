import type { PlangsGraph } from "../../entities/plangs_graph";

export function define(g: PlangsGraph) {
	const lb = g.paradigmBuilder;

	lb.define("para+algebraic", "algebraic types", {
		websites: [
			{
				kind: "wikipedia",
				title: "algebraic types",
				href: "https://en.wikipedia.org/wiki/Algebraic_types",
			},
		],
	});
}
