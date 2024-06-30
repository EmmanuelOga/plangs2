import type { PlangsGraph } from "../../entities/plangs_graph";

export function define(g: PlangsGraph) {
	const lb = g.paradigmBuilder;

	lb.define("para+low", "Low-code", {
		websites: [
			{
				kind: "wikipedia",
				title: "Low-code",
				href: "https://en.wikipedia.org/wiki/Low-code_development_platform",
			},
		],
	});
}
