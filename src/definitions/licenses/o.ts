import type { PlangsGraph } from "../../entities/plangs_graph";

export function define(g: PlangsGraph) {
	const lb = g.licenseBuilder;

	lb.define("license+open-source", "Open-source", [
		{
			kind: "wikipedia",
			title: "Open-source",
			href: "https://en.wikipedia.org/wiki/Open-source_license",
		},
		{
			kind: "wikipedia",
			title: "Open-source",
			href: "https://en.wikipedia.org/wiki/Open-source_software",
		},
	]);
}
