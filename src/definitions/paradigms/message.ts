import type { PlangsGraph } from "../../entities/plangs_graph";

export function define(g: PlangsGraph) {
	const lb = g.paradigmBuilder;

	lb.define("para+message", "message passing", {
		websites: [
			{
				kind: "wikipedia",
				title: "message passing",
				href: "https://en.wikipedia.org/wiki/Message_passing",
			},
		],
	});
}
