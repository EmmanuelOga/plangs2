import type { PlangsGraph } from "../../../entities/plangs_graph";

export function define(g: PlangsGraph) {
	const lb = g.plangBuilder;

	lb.define(
		"pl+dart",
		"Dart",
		{
			name: "Dart",
			websites: [
				{
					kind: "wikipedia",
					title: "Dart",
					href: "https://en.wikipedia.org/wiki/Dart_(programming_language)",
				},
			],
			images: [
				{
					kind: "logo",
					url: "https://upload.wikimedia.org/wikipedia/commons/f/fe/Dart_programming_language_logo.svg",
				},
			],
			releases: [{ version: "3.4.3", date: "2024-01-01", kind: "stable" }],
		},
		{
			implementations: ["pl+flutter"],
			influences: [
				"pl+c-sharp",
				"pl+c",
				"pl+cpp",
				"pl+erlang",
				"pl+java",
				"pl+javascript",
				"pl+ruby",
				"pl+smalltalk",
				"pl+strongtalk",
				"pl+typescript",
				"pl+ms-visual-c-sharp",
			],
			licenses: ["lic+bsd-s"],
			paradigms: [
				"para+multi",
				"para+functional",
				"para+imperative",
				"para+objects",
				"para+reflective",
			],
			people: ["person+lars-bak"],
			platforms: ["platf+cross-platform"],
			typeSystems: [
				"tsys+optional",
				"tsys+inferred",
				"tsys+static",
				"tsys+strong",
			],
		},
	);
}
