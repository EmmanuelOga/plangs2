import type { PlangsGraph } from "../../../entities/plangs_graph";

export function define(g: PlangsGraph) {
	const lb = g.plangBuilder;

	lb.define(
		"pl+source",
		"Source",
		{
			name: "Source",
			websites: [
				{
					kind: "wikipedia",
					title: "Source",
					href: "https://en.wikipedia.org/wiki/Source_(programming_language)",
				},
			],
			releases: [{ version: "unknown", date: "2024-01-01", kind: "stable" }],
		},
		{
			implementations: ["pl+safari", "pl+tail-call"],
			influences: ["pl+javascript", "pl+scheme"],
			licenses: ["lic+apache"],
			paradigms: [
				"para+multi",
				"para+scripting",
				"para+imperative",
				"para+functional",
			],
			platforms: ["platf+web"],
			typeSystems: ["tsys+dynamic", "tsys+duck"],
		},
	);
}
