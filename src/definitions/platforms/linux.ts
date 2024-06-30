import type { PlangsGraph } from "../../entities/plangs_graph";

export function define(g: PlangsGraph) {
	const lb = g.platformBuilder;

	lb.define("platf+linux", "Linux", {
		websites: [
			{
				kind: "wikipedia",
				title: "Linux",
				href: "https://en.wikipedia.org/wiki/Linux",
			},
		],
	});
}
