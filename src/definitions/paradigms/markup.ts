import type { PlangsGraph } from "../../entities/plangs_graph";

export function define(g: PlangsGraph) {
	const lb = g.paradigmBuilder;

	lb.define("para+markup", "markup", {
		websites: [
			{
				kind: "wikipedia",
				title: "markup",
				href: "https://en.wikipedia.org/wiki/Markup_language",
			},
		],
	});
}
