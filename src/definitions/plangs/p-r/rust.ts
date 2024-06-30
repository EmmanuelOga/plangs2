import type { PlangsGraph } from "../../../entities/plangs_graph";

export function define(g: PlangsGraph) {
	const lb = g.plangBuilder;

	lb.define(
		"pl+rust",
		"Rust",
		{
			name: "Rust",
			websites: [
				{
					kind: "wikipedia",
					title: "Rust",
					href: "https://en.wikipedia.org/wiki/Rust_(programming_language)",
				},
			],
			images: [
				{
					kind: "logo",
					url: "https://upload.wikimedia.org/wikipedia/commons/d/d5/Rust_programming_language_black_logo.svg",
				},
			],
			releases: [{ version: "1.78.0", date: "2024-01-01", kind: "stable" }],
			extensions: [".rs", ".rlib"],
		},
		{
			dialects: ["pl+project-verona"],
			influences: [
				"pl+alef",
				"pl+c",
				"pl+cpp",
				"pl+c-sharp",
				"pl+cilk-plus",
				"pl+cilk",
				"pl+cyclone",
				"pl+dis-virtual-machine",
				"pl+elm",
				"pl+erlang",
				"pl+haskell",
				"pl+limbo",
				"pl+ms-visual-c-sharp",
				"pl+ml",
				"pl+modula",
				"pl+newsqueak",
				"pl+ocaml",
				"pl+poly-slashml",
				"pl+racket",
				"pl+ruby",
				"pl+scheme",
				"pl+sml",
				"pl+swift",
			],
			licenses: ["lic+mit", "lic+apache"],
			platforms: ["platf+cross-platform"],
			typeSystems: ["tsys+affine"],
		},
	);
}
