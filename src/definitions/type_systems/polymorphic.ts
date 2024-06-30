import type { PlangsGraph } from "../../entities/plangs_graph";

export function define(g: PlangsGraph) {
	const lb = g.typeSystemBuilder;

	lb.define("tsys+polymorphic", "Polymorphic", {
		websites: [
			{
				title: "Polymorphic Type System",
				href: "https://en.wikipedia.org/wiki/polymorphism_(computer_science)",
				kind: "wikipedia",
			},
		],
	});
}
