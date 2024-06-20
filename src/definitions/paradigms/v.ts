import type { PlangsGraph } from "../../entities/plangs_graph";

export function define(g: PlangsGraph) {
	const lb = g.paradigmBuilder;

	lb.define("para+vector-oriented", "vector-oriented programming", [
		{
			kind: "wikipedia",
			title: "vector-oriented programming",
			href: "https://en.wikipedia.org/wiki/Array_programming",
		},
	]);

	lb.define("para+visual", "block structured", [
		{
			kind: "wikipedia",
			title: "Visual",
			href: "https://en.wikipedia.org/wiki/Visual_programming_language",
		},
		{
			kind: "wikipedia",
			title: "block structured",
			href: "https://en.wikipedia.org/wiki/Block_(programming)",
		},
	]);
}
