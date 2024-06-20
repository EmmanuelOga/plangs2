import type { PlangsGraph } from "../../entities/plangs_graph";

export function define(g: PlangsGraph) {
	const lb = g.licenseBuilder;

	lb.declare("license+icu", "ICU", [
		{
			kind: "wikipedia",
			title: "ICU",
			href: "https://en.wikipedia.org/wiki/International_Components_for_Unicode",
		},
	]);

	lb.declare("license+ios", "iOS", [
		{
			kind: "wikipedia",
			title: "iOS",
			href: "https://en.wikipedia.org/wiki/IOS",
		},
	]);

	lb.declare("license+isc", "ISC", [
		{
			kind: "wikipedia",
			title: "ISC",
			href: "https://en.wikipedia.org/wiki/ISC_license",
		},
	]);
}
