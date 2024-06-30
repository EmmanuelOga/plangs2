import type { PlangsGraph } from "../../../entities/plangs_graph";

export function define(g: PlangsGraph) {
	const lb = g.plangBuilder;

	lb.define(
		"pl+jq",
		"jq",
		{
			name: "jq",
			websites: [
				{
					kind: "wikipedia",
					title: "jq",
					href: "https://en.wikipedia.org/wiki/Jq_(programming_language)",
				},
			],
			images: [
				{
					kind: "logo",
					url: "https://upload.wikimedia.org/wikipedia/commons/0/0e/Jq_logo.svg",
				},
			],
			releases: [{ version: "1.7.1", date: "2023-01-01", kind: "stable" }],
		},
		{
			implementations: ["pl+c", "pl+go", "pl+rust"],
			influences: ["pl+icon"],
			licenses: ["lic+mit"],
			paradigms: ["para+functional", "para+json", "para+tacit"],
			platforms: ["platf+cross-platform"],
		},
	);
}
