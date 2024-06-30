import type { PlangsGraph } from "../../../entities/plangs_graph";

export function define(g: PlangsGraph) {
	const lb = g.plangBuilder;

	lb.define(
		"pl+csound",
		"Csound",
		{
			name: "Csound",
			websites: [
				{
					kind: "wikipedia",
					title: "Csound",
					href: "https://en.wikipedia.org/wiki/Csound",
				},
			],
			releases: [{ version: "6.18.1", date: "2022-01-01", kind: "stable" }],
		},
		{ licenses: ["lic+lgpl"] },
	);
}
