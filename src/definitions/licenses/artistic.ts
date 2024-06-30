import type { PlangsGraph } from "../../entities/plangs_graph";

export function define(g: PlangsGraph) {
	const lb = g.licenseBuilder;

	lb.define("lic+artistic", "Artistic License", {
		websites: [
			{
				kind: "wikipedia",
				title: "Artistic License",
				href: "https://en.wikipedia.org/wiki/Artistic_License",
			},
		],
	});
}
