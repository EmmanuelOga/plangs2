import type { PlangsGraph } from "../../../entities/plangs_graph";

export function define(g: PlangsGraph) {
	const lb = g.plangBuilder;

	lb.define(
		"pl+qml",
		"QML",
		{
			name: "QML",
			websites: [
				{
					kind: "wikipedia",
					title: "QML",
					href: "https://en.wikipedia.org/wiki/QML",
				},
			],
			releases: [{ version: "6.4", date: "2022-01-01", kind: "stable" }],
			extensions: [".qml"],
		},
		{
			influences: ["pl+xaml", "pl+json", "pl+javascript", "pl+qt"],
			paradigms: ["para+multi", "para+dec", "para+reactive", "para+scripting"],
			typeSystems: ["tsys+dynamic", "tsys+strong"],
		},
	);
}
