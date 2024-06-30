import type { PlangsGraph } from "../../../entities/plangs_graph";

export function define(g: PlangsGraph) {
	const lb = g.plangBuilder;

	lb.define(
		"pl+p4",
		"P4",
		{
			name: "P4",
			websites: [
				{
					kind: "wikipedia",
					title: "P4",
					href: "https://en.wikipedia.org/wiki/P4_(programming_language)",
				},
			],
			releases: [{ version: "1.2.2", date: "2021-01-01", kind: "stable" }],
		},
		{
			licenses: ["lic+apache"],
			paradigms: ["para+compiled", "para+domain", "para+imperative"],
		},
	);
}
