import type { PlangsGraph } from "../../entities/plangs_graph";

export function define(g: PlangsGraph) {
	const lb = g.paradigmBuilder;

	lb.define("para+partitioned", "Partitioned global address space", {
		websites: [
			{
				kind: "wikipedia",
				title: "Partitioned global address space",
				href: "https://en.wikipedia.org/wiki/Partitioned_global_address_space",
			},
		],
	});
}
