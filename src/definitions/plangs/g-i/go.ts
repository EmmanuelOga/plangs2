import type { PlangsGraph } from "../../../entities/plangs_graph";

export function define(g: PlangsGraph) {
	const lb = g.plangBuilder;

	lb.define(
		"pl+go",
		"Go",
		{
			name: "Go",
			websites: [
				{
					kind: "wikipedia",
					title: "Go",
					href: "https://en.wikipedia.org/wiki/Go_(programming_language)",
				},
			],
			images: [
				{
					kind: "logo",
					url: "https://upload.wikimedia.org/wikipedia/commons/0/05/Go_Logo_Blue.svg",
				},
			],
			releases: [{ version: "1.22.4", date: "2024-01-01", kind: "stable" }],
		},
		{
			implementations: ["pl+assembly", "pl+cpp"],
			influences: [
				"pl+alef",
				"pl+bcpl",
				"pl+c",
				"pl+d",
				"pl+dis-virtual-machine",
				"pl+erlang",
				"pl+limbo",
				"pl+modula",
				"pl+newsqueak",
				"pl+oberon",
				"pl+oberon-2",
				"pl+occam",
				"pl+pascal",
				"pl+python",
				"pl+smalltalk",
			],
			licenses: ["lic+bsd-c", "lic+patents"],
			paradigms: [
				"para+multi",
				"para+concurrent",
				"para+imperative",
				"para+functional",
				"para+objects",
			],
			people: [
				"person+robert-griesemer",
				"person+rob-pike",
				"person+ken-thompson",
			],
			platforms: [
				"platf+bsd",
				"platf+linux",
				"platf+mac",
				"platf+plan9",
				"platf+win",
			],
			typeSystems: [
				"tsys+inferred",
				"tsys+static",
				"tsys+strong",
				"tsys+structural",
				"tsys+nominative",
			],
		},
	);
}
