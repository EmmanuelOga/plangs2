import type { PlangsGraph } from "../../entities/plangs_graph";

export function define(g: PlangsGraph) {
	const lb = g.platformBuilder;

	lb.define("platf+pip", "pip (package manager)", {
		websites: [
			{
				kind: "wikipedia",
				title: "pip (package manager)",
				href: "https://en.wikipedia.org/wiki/Pip_(package_manager)",
			},
		],
	});
}
