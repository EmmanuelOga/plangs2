import type { PlangsGraph } from "../../../entities/plangs_graph";

export function define(g: PlangsGraph) {
	const lb = g.plangBuilder;

	lb.define(
		"pl+max",
		"Max",
		{
			name: "Max",
			websites: [
				{
					kind: "wikipedia",
					title: "Max",
					href: "https://en.wikipedia.org/wiki/Max_(software)",
				},
			],
			images: [
				{
					kind: "logo",
					url: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/93/Logo_Max_8_software.jpg/180px-Logo_Max_8_software.jpg",
				},
			],
			releases: [{ version: "8.6.2", date: "2024-01-01", kind: "stable" }],
		},
		{ licenses: ["lic+proprietary"] },
	);
}
