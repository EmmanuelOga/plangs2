import type { PlangsGraph } from "../../../entities/plangs_graph";

export function define(g: PlangsGraph) {
	const lb = g.plangBuilder;

	lb.define(
		"pl+nim",
		"Nim",
		{
			name: "Nim",
			websites: [
				{
					kind: "wikipedia",
					title: "Nim",
					href: "https://en.wikipedia.org/wiki/Nim_(programming_language)",
				},
			],
			images: [
				{
					kind: "logo",
					url: "https://upload.wikimedia.org/wikipedia/commons/e/e3/Nim_logo.svg",
				},
			],
			releases: [{ version: "2.0.4", date: "2024-01-01", kind: "stable" }],
		},
		{
			influences: [
				"pl+ada",
				"pl+c",
				"pl+cpp",
				"pl+modula",
				"pl+lisp",
				"pl+pascal",
				"pl+python",
				"pl+oberon",
				"pl+rust",
				"pl+parasail",
				"pl+oberon-2",
			],
			paradigms: [
				"para+multi",
				"para+compiled",
				"para+concurrent",
				"para+imperative",
				"para+functional",
				"para+objects",
				"para+meta",
			],
			platforms: [
				"platf+ia-32",
				"platf+x86-64",
				"platf+arm",
				"platf+aarch64",
				"platf+risc-v",
				"platf+cross-platform",
			],
			typeSystems: [
				"tsys+static",
				"tsys+strong",
				"tsys+inferred",
				"tsys+structural",
			],
		},
	);
}
