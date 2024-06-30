import type { PlangsGraph } from "../../entities/plangs_graph";

export function define(g: PlangsGraph) {
	const lb = g.typeSystemBuilder;

	lb.define("tsys+strong", "Strong", {
		websites: [
			{
				title: "Strong Type System",
				href: "https://en.wikipedia.org/wiki/strong_typing",
				kind: "wikipedia",
			},
		],
	});
}
