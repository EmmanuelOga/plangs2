import type { PlangsGraph } from "../../entities/plangs_graph";

export function define(g: PlangsGraph) {
	const lb = g.licenseBuilder;

	lb.define("lic+open-source", "open source", {
		websites: [
			{
				kind: "wikipedia",
				title: "open source",
				href: "https://en.wikipedia.org/wiki/Open-source_software",
			},
			{
				kind: "wikipedia",
				title: "Open-source",
				href: "https://en.wikipedia.org/wiki/Open-source_license",
			},
		],
	});
}
