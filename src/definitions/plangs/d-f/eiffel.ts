import type { PlangsGraph } from "../../../entities/plangs_graph";

export function define(g: PlangsGraph) {
	const lb = g.plangBuilder;

	lb.define(
		"pl+eiffel",
		"Eiffel",
		{
			name: "Eiffel",
			websites: [
				{
					kind: "wikipedia",
					title: "Eiffel",
					href: "https://en.wikipedia.org/wiki/Eiffel_(programming_language)",
				},
			],
			images: [
				{
					kind: "logo",
					url: "https://upload.wikimedia.org/wikipedia/commons/6/6a/Eiffel_logo.svg",
				},
			],
			releases: [{ version: "23.09", date: "2023-01-01", kind: "stable" }],
			extensions: [".e"],
		},
		{
			implementations: [
				"pl+eiffelstudio",
				"pl+libertyeiffel",
				"pl+smarteiffel",
				"pl+visual-eiffel",
			],
			influences: [
				"pl+ada",
				"pl+simula",
				"pl+z-notation",
				"pl+simula-67",
				"pl+simula67",
			],
			paradigms: [
				"para+objects",
				"para+class",
				"para+generic",
				"para+concurrent",
			],
			people: ["person+bertrand-meyer"],
			platforms: [
				"platf+cross-platform",
				"platf+bsd",
				"platf+linux",
				"platf+mac",
				"platf+win",
			],
			typeSystems: ["tsys+static"],
		},
	);
}
