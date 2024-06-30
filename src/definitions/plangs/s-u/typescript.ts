import type { PlangsGraph } from "../../../entities/plangs_graph";

export function define(g: PlangsGraph) {
	const lb = g.plangBuilder;

	lb.define(
		"pl+typescript",
		"TypeScript",
		{
			name: "TypeScript",
			websites: [
				{
					kind: "wikipedia",
					title: "TypeScript",
					href: "https://en.wikipedia.org/wiki/TypeScript",
				},
			],
			images: [
				{
					kind: "logo",
					url: "https://upload.wikimedia.org/wikipedia/commons/f/f5/Typescript.svg",
				},
			],
			releases: [{ version: "5.4.2", date: "2024-01-01", kind: "stable" }],
		},
		{
			dialects: ["pl+assemblyscript"],
			influences: [
				"pl+actionscript",
				"pl+c-sharp",
				"pl+javascript",
				"pl+ms-visual-c-sharp",
				"pl+f-sharp",
				"pl+java",
			],
			licenses: ["lic+apache"],
			paradigms: [
				"para+multi",
				"para+functional",
				"para+generic",
				"para+imperative",
				"para+objects",
			],
			typeSystems: ["tsys+duck", "tsys+gradual", "tsys+structural"],
		},
	);
}
