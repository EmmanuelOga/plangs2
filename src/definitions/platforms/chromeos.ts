import type { PlangsGraph } from "../../entities/plangs_graph";

export function define(g: PlangsGraph) {
	const lb = g.platformBuilder;

	lb.define("platf+chromeos", "ChromeOS", {
		websites: [
			{
				kind: "wikipedia",
				title: "ChromeOS",
				href: "https://en.wikipedia.org/wiki/ChromeOS",
			},
		],
	});
}
