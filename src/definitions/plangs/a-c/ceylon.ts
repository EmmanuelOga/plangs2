import type { PlangsGraph } from "../../../entities/plangs_graph";

export function define(g: PlangsGraph) {
	const lb = g.plangBuilder;

	lb.define(
		"pl+ceylon",
		"Ceylon",
		{
			name: "Ceylon",
			websites: [
				{
					kind: "wikipedia",
					title: "Ceylon",
					href: "https://en.wikipedia.org/wiki/Ceylon_(programming_language)",
				},
			],
			images: [
				{
					kind: "logo",
					url: "https://upload.wikimedia.org/wikipedia/en/thumb/2/20/Ceylon_%28programming_language%29_logo.png/121px-Ceylon_%28programming_language%29_logo.png",
				},
			],
			releases: [{ version: "1.3.3", date: "2017-01-01", kind: "stable" }],
		},
		{
			influences: [
				"pl+java",
				"pl+scala",
				"pl+smalltalk",
				"pl+ml",
				"pl+lisp",
				"pl+whiley",
			],
			licenses: ["lic+apache"],
			paradigms: ["para+objects"],
			platforms: ["platf+jvm", "platf+javascript"],
			typeSystems: ["tsys+static", "tsys+strong", "tsys+safe"],
		},
	);
}
