import type { PlangsGraph } from "../../entities/plangs_graph";

export function define(g: PlangsGraph) {
	const lb = g.platformBuilder;

	lb.define("platf+vse", "z/VSE", {
		websites: [
			{
				kind: "wikipedia",
				title: "DOS/VSE",
				href: "https://en.wikipedia.org/wiki/VSE_(operating_system)",
			},
		],
	});
}
