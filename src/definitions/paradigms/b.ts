import type { PlangsGraph } from "../../entities/plangs_graph";

export function define(g: PlangsGraph) {
	const lb = g.paradigmBuilder;

	lb.declare("para+block structured", "block structured", [
		{
			kind: "wikipedia",
			title: "block structured",
			href: "https://en.wikipedia.org/wiki/Block_(programming)",
		},
	]);

	lb.declare("para+block-structured", "block-structured", []);
}
