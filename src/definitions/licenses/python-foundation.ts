import type { PlangsGraph } from "../../entities/plangs_graph";

export function define(g: PlangsGraph) {
	const lb = g.licenseBuilder;

	lb.define("lic+python-foundation", "Python Software Foundation License", {
		websites: [
			{
				kind: "wikipedia",
				title: "Python Software Foundation License",
				href: "https://en.wikipedia.org/wiki/Python_Software_Foundation_License",
			},
		],
	});
}
