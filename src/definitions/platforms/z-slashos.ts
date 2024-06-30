import type { PlangsGraph } from "../../entities/plangs_graph";

export function define(g: PlangsGraph) {
	const lb = g.platformBuilder;

	lb.define("platf+z-slashos", "z/OS", {
		websites: [
			{
				kind: "wikipedia",
				title: "z/OS",
				href: "https://en.wikipedia.org/wiki/Z/OS",
			},
		],
	});
}
