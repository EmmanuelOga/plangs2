import type { PlangsGraph } from "../../entities/plangs_graph";

export function define(g: PlangsGraph) {
	const lb = g.paradigmBuilder;

	lb.define("para+nondeterministic", "nondeterministic", {
		websites: [
			{
				kind: "wikipedia",
				title: "nondeterministic",
				href: "https://en.wikipedia.org/wiki/Nondeterministic_programming",
			},
		],
	});
}
