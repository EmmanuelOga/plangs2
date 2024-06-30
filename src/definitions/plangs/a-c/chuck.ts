import type { PlangsGraph } from "../../../entities/plangs_graph";

export function define(g: PlangsGraph) {
	const lb = g.plangBuilder;

	lb.define(
		"pl+chuck",
		"ChucK",
		{
			name: "ChucK",
			websites: [
				{
					kind: "wikipedia",
					title: "ChucK",
					href: "https://en.wikipedia.org/wiki/ChucK",
				},
			],
			images: [
				{
					kind: "logo",
					url: "https://upload.wikimedia.org/wikipedia/commons/2/24/Chuck-2023.png",
				},
			],
			releases: [{ version: "1.5.2.4", date: "2024-01-01", kind: "stable" }],
		},
		{
			licenses: ["lic+mac-os-x", "lic+linux", "lic+win", "lic+gpl", "lic+ios"],
			paradigms: ["para+multi"],
			people: ["person+ge-wang"],
			platforms: ["platf+cross-platform"],
			typeSystems: ["tsys+strong"],
		},
	);
}
