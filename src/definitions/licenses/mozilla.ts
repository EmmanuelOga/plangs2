import type { PlangsGraph } from "../../entities/plangs_graph";

export function define(g: PlangsGraph) {
	const lb = g.licenseBuilder;

	lb.define("lic+mozilla-public", "MPL", {
		websites: [
			{
				kind: "wikipedia",
				title: "MPL-1-1",
				href: "https://en.wikipedia.org/wiki/Mozilla_Public_License",
			},
		],
	});

	lb.define("lic+mozilla-public-licence", "Mozilla Public", {
		websites: [
			{
				kind: "wikipedia",
				title: "Mozilla Public",
				href: "https://en.wikipedia.org/wiki/Mozilla_Public_Licence",
			},
		],
	});
}
