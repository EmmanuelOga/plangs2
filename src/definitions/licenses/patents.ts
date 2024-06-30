import type { PlangsGraph } from "../../entities/plangs_graph";

export function define(g: PlangsGraph) {
	const lb = g.licenseBuilder;

	lb.define("lic+patents", "patent", {
		websites: [
			{
				kind: "wikipedia",
				title: "patent",
				href: "https://en.wikipedia.org/wiki/Software_patents",
			},
		],
	});
}
