import type { PlangsGraph } from "../../entities/plangs_graph";

export function define(g: PlangsGraph) {
	const lb = g.platformBuilder;

	lb.define("platf+74181", "74181", {
		websites: [
			{
				kind: "wikipedia",
				title: "74181",
				href: "https://en.wikipedia.org/wiki/74181",
			},
		],
	});
}
