import type { PlangsGraph } from "../../entities/plangs_graph";

export function define(g: PlangsGraph) {
	const lb = g.platformBuilder;

	lb.define("platf+vm", "VM/CMS", {
		websites: [
			{
				kind: "wikipedia",
				title: "VM/CMS",
				href: "https://en.wikipedia.org/wiki/VM_(operating_system)",
			},
		],
	});
}
