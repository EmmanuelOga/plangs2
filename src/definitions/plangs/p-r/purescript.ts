import type { PlangsGraph } from "../../../entities/plangs_graph";

export function define(g: PlangsGraph) {
	const lb = g.plangBuilder;

	lb.define(
		"pl+purescript",
		"PureScript",
		{
			name: "PureScript",
			websites: [
				{
					kind: "wikipedia",
					title: "PureScript",
					href: "https://en.wikipedia.org/wiki/PureScript",
				},
			],
			images: [
				{
					kind: "logo",
					url: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/64/PureScript_Logo.png/121px-PureScript_Logo.png",
				},
			],
			releases: [{ version: "0.15.15", date: "2024-01-01", kind: "stable" }],
		},
		{
			influences: ["pl+haskell", "pl+javascript"],
			licenses: ["lic+bsd-m"],
			paradigms: ["para+functional"],
			typeSystems: ["tsys+inferred", "tsys+static", "tsys+strong"],
		},
	);
}
