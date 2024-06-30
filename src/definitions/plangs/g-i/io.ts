import type { PlangsGraph } from "../../../entities/plangs_graph";

export function define(g: PlangsGraph) {
	const lb = g.plangBuilder;

	lb.define(
		"pl+io",
		"Io",
		{
			name: "Io",
			websites: [
				{
					kind: "wikipedia",
					title: "Io",
					href: "https://en.wikipedia.org/wiki/Io_(programming_language)",
				},
			],
			images: [
				{
					kind: "logo",
					url: "https://upload.wikimedia.org/wikipedia/commons/2/26/Io-logo.svg",
				},
			],
			releases: [{ version: "unknown", date: "2017-01-01", kind: "stable" }],
		},
		{
			influences: [
				"pl+smalltalk",
				"pl+newtonscript",
				"pl+self",
				"pl+lua",
				"pl+lisp",
				"pl+python",
				"pl+actor-model-middle-history",
				"pl+moonscript",
			],
			paradigms: ["para+objects", "para+prototypes"],
			typeSystems: ["tsys+dynamic", "tsys+strong"],
		},
	);
}
