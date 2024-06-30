import type { PlangsGraph } from "../../entities/plangs_graph";

export function define(g: PlangsGraph) {
	const lb = g.paradigmBuilder;

	lb.define("para+dec", "Declarative", {
		websites: [
			{
				kind: "wikipedia",
				title: "declarative",
				href: "https://en.wikipedia.org/wiki/Declarative_programming",
			},
		],
	});
}
