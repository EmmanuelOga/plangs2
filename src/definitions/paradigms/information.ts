import type { PlangsGraph } from "../../entities/plangs_graph";

export function define(g: PlangsGraph) {
	const lb = g.paradigmBuilder;

	lb.define("para+information", "data and procedure hiding", {
		websites: [
			{
				kind: "wikipedia",
				title: "data and procedure hiding",
				href: "https://en.wikipedia.org/wiki/Information_hiding",
			},
		],
	});
}
