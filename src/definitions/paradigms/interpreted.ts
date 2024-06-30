import type { PlangsGraph } from "../../entities/plangs_graph";

export function define(g: PlangsGraph) {
	const lb = g.paradigmBuilder;

	lb.define("para+interpreted", "interpreted", {
		websites: [
			{
				kind: "wikipedia",
				title: "interpreted",
				href: "https://en.wikipedia.org/wiki/Interpreted_language",
			},
		],
	});
}
