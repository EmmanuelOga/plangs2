import type { PlangsGraph } from "../../../entities/plangs_graph";

export function define(g: PlangsGraph) {
	const lb = g.plangBuilder;

	lb.define(
		"pl+ocaml",
		"OCaml",
		{
			name: "OCaml",
			websites: [
				{
					kind: "wikipedia",
					title: "OCaml",
					href: "https://en.wikipedia.org/wiki/OCaml",
				},
			],
			images: [
				{
					kind: "logo",
					url: "https://upload.wikimedia.org/wikipedia/commons/f/ff/OCaml_Logo.svg",
				},
			],
			releases: [{ version: "5.2.0", date: "2024-01-01", kind: "stable" }],
		},
		{
			dialects: ["pl+ats", "pl+f-sharp", "pl+f-star", "pl+reason"],
			implementations: ["pl+c"],
			influences: [
				"pl+caml",
				"pl+ml",
				"pl+modula",
				"pl+c",
				"pl+pascal",
				"pl+sml",
				"pl+poly-slashml",
			],
			licenses: ["lic+lgpl"],
			paradigms: [
				"para+multi",
				"para+functional",
				"para+imperative",
				"para+modular",
				"para+objects",
			],
			people: ["person+xavier-leroy", "person+damien-doligez"],
			platforms: [
				"platf+ia-32",
				"platf+x86-64",
				"platf+power-isa",
				"platf+arm",
				"platf+risc-v",
				"platf+cross-platform",
				"platf+linux",
				"platf+unix",
				"platf+mac",
				"platf+win",
			],
			typeSystems: [
				"tsys+inferred",
				"tsys+static",
				"tsys+strong",
				"tsys+structural",
			],
		},
	);
}
