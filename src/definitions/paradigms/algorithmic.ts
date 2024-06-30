import type { PlangsGraph } from "../../entities/plangs_graph";

export function define(g: PlangsGraph) {
	const lb = g.paradigmBuilder;

	lb.define("para+algorithmic", "algorithmic", {
		websites: [
			{
				kind: "wikipedia",
				title: "algorithmic",
				href: "https://en.wikipedia.org/w/index.php?title=Algorithmic_programming&action=edit&redlink=1",
			},
		],
	});
}
