import type { PlangsGraph } from "../../entities/plangs_graph";

export function define(g: PlangsGraph) {
	const lb = g.platformBuilder;

	lb.define("platf+arcaos", "ArcaOS", {
		websites: [
			{
				kind: "wikipedia",
				title: "ArcaOS",
				href: "https://en.wikipedia.org/wiki/ArcaOS",
			},
		],
	});
}
