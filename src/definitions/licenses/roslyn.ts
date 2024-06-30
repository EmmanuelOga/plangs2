import type { PlangsGraph } from "../../entities/plangs_graph";

export function define(g: PlangsGraph) {
	const lb = g.licenseBuilder;

	lb.define("lic+roslyn", "Roslyn", {
		websites: [
			{
				kind: "wikipedia",
				title: "Roslyn",
				href: "https://en.wikipedia.org/wiki/Roslyn_(compiler)",
			},
		],
	});
}
