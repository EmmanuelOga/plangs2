import type { PlangsGraph } from "../../../entities/plangs_graph";

export function define(g: PlangsGraph) {
	const lb = g.plangBuilder;

	lb.define(
		"pl+dataflex",
		"DataFlex",
		{
			name: "DataFlex",
			websites: [
				{
					kind: "wikipedia",
					title: "DataFlex",
					href: "https://en.wikipedia.org/wiki/DataFlex",
				},
			],
			images: [
				{
					kind: "logo",
					url: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/36/DF_Logo_Compact_RGB.png/220px-DF_Logo_Compact_RGB.png",
				},
			],
			releases: [{ version: "24.0", date: "2024-01-01", kind: "stable" }],
		},
		{ licenses: ["lic+commercial", "lic+proprietary"] },
	);
}
