import type { PlangsGraph } from "../../entities/plangs_graph";

export function define(g: PlangsGraph) {
	const lb = g.licenseBuilder;

	lb.define("lic+cc", "Creative Commons Attribution", {
		websites: [
			{
				kind: "wikipedia",
				title: "Creative Commons Attribution",
				href: "https://en.wikipedia.org/wiki/Creative_Commons_license#Attribution",
			},
		],
	});
}
