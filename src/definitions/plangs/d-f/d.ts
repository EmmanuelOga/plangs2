import type { PlangsGraph } from "../../../entities/plangs_graph";

export function define(g: PlangsGraph) {
	const lb = g.plangBuilder;

	lb.define(
		"pl+d",
		"D",
		{
			name: "D",
			websites: [
				{
					kind: "wikipedia",
					title: "D",
					href: "https://en.wikipedia.org/wiki/D_(programming_language)",
				},
				{
					kind: "wikipedia",
					title: "D programming language",
					href: "https://en.wikipedia.org/wiki/D_language",
				},
			],
			images: [
				{
					kind: "logo",
					url: "https://upload.wikimedia.org/wikipedia/commons/2/24/D_Programming_Language_logo.svg",
				},
			],
			releases: [{ version: "2.108.0", date: "2024-01-01", kind: "stable" }],
		},
		{
			influences: [
				"pl+ada",
				"pl+c",
				"pl+cpp",
				"pl+c-sharp",
				"pl+basic",
				"pl+eiffel",
				"pl+java",
				"pl+python",
				"pl+ms-visual-c-sharp",
				"pl+ruby",
			],
			licenses: ["lic+boost"],
			paradigms: [
				"para+multi",
				"para+functional",
				"para+imperative",
				"para+objects",
			],
			people: ["person+walter-bright", "person+andrei-alexandrescu"],
			platforms: ["platf+bsd", "platf+linux", "platf+mac", "platf+win"],
			typeSystems: ["tsys+inferred", "tsys+static", "tsys+strong"],
		},
	);
}
