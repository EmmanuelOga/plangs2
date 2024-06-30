import type { PlangsGraph } from "../../entities/plangs_graph";

export function define(g: PlangsGraph) {
	const lb = g.licenseBuilder;

	lb.define("lic+ms", "MS", {
		websites: [
			{
				kind: "wikipedia",
				title: "MS",
				href: "https://en.wikipedia.org/wiki/Microsoft",
			},
		],
	});
}
