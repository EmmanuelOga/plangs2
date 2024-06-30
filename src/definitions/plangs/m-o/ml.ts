import type { PlangsGraph } from "../../../entities/plangs_graph";

export function define(g: PlangsGraph) {
	const lb = g.plangBuilder;

	lb.define(
		"pl+ml",
		"ML",
		{
			name: "ML",
			websites: [
				{
					kind: "wikipedia",
					title: "ML",
					href: "https://en.wikipedia.org/wiki/ML_(programming_language)",
				},
			],
		},
		{
			dialects: [
				"pl+alice",
				"pl+ats",
				"pl+caml",
				"pl+f-sharp",
				"pl+f-star",
				"pl+futhark",
				"pl+ocaml",
				"pl+sml",
				"pl+mlton",
				"pl+poly-slashml",
				"pl+reason",
			],
			influences: ["pl+iswim"],
			paradigms: [
				"para+multi",
				"para+functional",
				"para+generic",
				"para+imperative",
			],
			people: ["person+robin-milner"],
			typeSystems: ["tsys+inferred", "tsys+static", "tsys+strong"],
		},
	);
}
