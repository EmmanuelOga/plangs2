import type { PlangsGraph } from "../../../entities/plangs_graph";

export function define(g: PlangsGraph) {
	const lb = g.plangBuilder;

	lb.define(
		"pl+f-star",
		"F*",
		{
			name: "F*",
			websites: [
				{
					kind: "wikipedia",
					title: "F*",
					href: "https://en.wikipedia.org/wiki/F*_(programming_language)",
				},
			],
			images: [
				{
					kind: "logo",
					url: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b1/Fstar-official-logo-2015.png/128px-Fstar-official-logo-2015.png",
				},
			],
			releases: [{ version: "2023.09.03", date: "2023-09-03", kind: "stable" }],
		},
		{
			influences: [
				"pl+f-sharp",
				"pl+coq",
				"pl+dafny",
				"pl+lean",
				"pl+ocaml",
				"pl+sml",
				"pl+ml",
				"pl+poly-slashml",
			],
			licenses: ["lic+apache"],
			paradigms: ["para+multi", "para+functional", "para+imperative"],
			platforms: [
				"platf+cross-platform",
				"platf+linux",
				"platf+mac",
				"platf+win",
			],
			typeSystems: [
				"tsys+dependent",
				"tsys+inferred",
				"tsys+static",
				"tsys+strong",
			],
		},
	);
}
