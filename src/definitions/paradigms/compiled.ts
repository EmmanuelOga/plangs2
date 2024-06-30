import type { PlangsGraph } from "../../entities/plangs_graph";

export function define(g: PlangsGraph) {
	const lb = g.paradigmBuilder;

	lb.define("para+compiled", "compiled", {
		websites: [
			{
				kind: "wikipedia",
				title: "compiled",
				href: "https://en.wikipedia.org/wiki/Compiled_language",
			},
		],
	});
}
