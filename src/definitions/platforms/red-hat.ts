import type { PlangsGraph } from "../../entities/plangs_graph";

export function define(g: PlangsGraph) {
	const lb = g.platformBuilder;

	lb.define("platf+red-hat", "Red Hat", {
		websites: [
			{
				kind: "wikipedia",
				title: "Red Hat",
				href: "https://en.wikipedia.org/wiki/Red_Hat",
			},
		],
	});
}
