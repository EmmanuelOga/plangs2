import type { PlangsGraph } from "../../entities/plangs_graph";

export function define(g: PlangsGraph) {
	const lb = g.platformBuilder;

	lb.define("platf+python", "Python", {
		websites: [
			{
				kind: "wikipedia",
				title: "Python",
				href: "https://en.wikipedia.org/wiki/Python_(programming_language)",
			},
		],
	});
}
