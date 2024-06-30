import type { PlangsGraph } from "../../entities/plangs_graph";

export function define(g: PlangsGraph) {
	const lb = g.licenseBuilder;

	lb.define("lic+icu", "ICU", {
		websites: [
			{
				kind: "wikipedia",
				title: "ICU",
				href: "https://en.wikipedia.org/wiki/International_Components_for_Unicode",
			},
		],
	});
}
