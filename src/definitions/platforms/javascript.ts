import type { PlangsGraph } from "../../entities/plangs_graph";

export function define(g: PlangsGraph) {
	const lb = g.platformBuilder;

	lb.define("platf+javascript", "JavaScript", {
		websites: [
			{
				kind: "wikipedia",
				title: "JavaScript",
				href: "https://en.wikipedia.org/wiki/JavaScript",
			},
		],
	});
}
