import type { PlangsGraph } from "../../../entities/plangs_graph";

export function define(g: PlangsGraph) {
	const lb = g.plangBuilder;

	lb.define(
		"pl+coffeescript",
		"CoffeeScript",
		{
			name: "CoffeeScript",
			websites: [
				{
					kind: "wikipedia",
					title: "CoffeeScript",
					href: "https://en.wikipedia.org/wiki/CoffeeScript",
				},
			],
			images: [
				{
					kind: "logo",
					url: "https://upload.wikimedia.org/wikipedia/commons/d/d3/CoffeeScript-logo.svg",
				},
			],
			releases: [{ version: "2.7.0", date: "2022-01-01", kind: "stable" }],
			extensions: [".coffee"],
		},
		{
			influences: [
				"pl+haskell",
				"pl+javascript",
				"pl+perl",
				"pl+python",
				"pl+ruby",
				"pl+yaml",
			],
			licenses: ["lic+mit"],
			paradigms: [
				"para+multi",
				"para+prototypes",
				"para+functional",
				"para+imperative",
				"para+scripting",
			],
			people: ["person+jeremy-ashkenas"],
			platforms: ["platf+cross-platform"],
			typeSystems: ["tsys+dynamic"],
		},
	);
}
