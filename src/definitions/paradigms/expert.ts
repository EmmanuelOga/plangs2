import type { PlangsGraph } from "../../entities/plangs_graph";

export function define(g: PlangsGraph) {
	const lb = g.paradigmBuilder;

	lb.define("para+expert", "expert systems", {
		websites: [
			{
				kind: "wikipedia",
				title: "expert systems",
				href: "https://en.wikipedia.org/wiki/Expert_systems",
			},
		],
	});
}
