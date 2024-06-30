import type { PlangsGraph } from "../../../entities/plangs_graph";

export function define(g: PlangsGraph) {
	const lb = g.plangBuilder;

	lb.define(
		"pl+javascript",
		"JavaScript",
		{
			name: "JavaScript",
			websites: [
				{
					kind: "wikipedia",
					title: "JavaScript",
					href: "https://en.wikipedia.org/wiki/JavaScript",
				},
				{
					kind: "wikipedia",
					title: "Javascript",
					href: "https://en.wikipedia.org/wiki/Javascript_(programming_language)",
				},
			],
			images: [
				{
					kind: "logo",
					url: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a4/JavaScript_code.png/300px-JavaScript_code.png",
				},
			],
			releases: [
				{ version: "unknown", date: "2023-01-01", kind: "stable" },
				{ version: "unknown", date: "2025-01-01", kind: "preview" },
			],
			extensions: [".js", ".cjs", ".mjs[4]"],
		},
		{
			dialects: ["pl+assemblyscript"],
			implementations: [
				"pl+v8",
				"pl+javascriptcore",
				"pl+spidermonkey",
				"pl+chakra",
			],
			influences: [
				"pl+c",
				"pl+hypertalk",
				"pl+java",
				"pl+scheme",
				"pl+self",
				"pl+awk",
				"pl+lua",
				"pl+moonscript",
				"pl+perl",
				"pl+python",
				"pl+xtalk",
			],
			paradigms: [
				"para+multi",
				"para+event",
				"para+functional",
				"para+imperative",
				"para+objects",
			],
			people: ["person+brendan-eich"],
			typeSystems: ["tsys+dynamic", "tsys+weak", "tsys+duck"],
		},
	);
}
