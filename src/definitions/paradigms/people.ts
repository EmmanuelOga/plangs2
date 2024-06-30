import type { PlangsGraph } from "../../entities/plangs_graph";

export function define(g: PlangsGraph) {
	const lb = g.paradigmBuilder;

	lb.define("para+people", "People Oriented Programming", {
		websites: [
			{
				kind: "wikipedia",
				title: "People Oriented Programming",
				href: "https://en.wikipedia.org/w/index.php?title=People_Oriented_Programming&action=edit&redlink=1",
			},
		],
	});
}
