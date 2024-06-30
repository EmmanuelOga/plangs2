import type { PlangsGraph } from "../../../entities/plangs_graph";

export function define(g: PlangsGraph) {
	const lb = g.plangBuilder;

	lb.define(
		"pl+logo",
		"Logo",
		{
			name: "Logo",
			websites: [
				{
					kind: "wikipedia",
					title: "Logo",
					href: "https://en.wikipedia.org/wiki/Logo_(programming_language)",
				},
			],
			images: [
				{
					kind: "logo",
					url: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/09/KochTurtleAnim.gif/300px-KochTurtleAnim.gif",
				},
			],
		},
		{
			dialects: ["pl+starlogo", "pl+netlogo"],
			implementations: ["pl+ucblogo"],
			influences: ["pl+lisp"],
			paradigms: [
				"para+multi",
				"para+functional",
				"para+educational",
				"para+imperative",
				"para+reflective",
			],
			people: [
				"person+wally-feurzeig",
				"person+seymour-papert",
				"person+cynthia-solomon",
			],
			typeSystems: ["tsys+dynamic"],
		},
	);
}
