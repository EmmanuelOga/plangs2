import type { PlangsGraph } from "../../../entities/plangs_graph";

export function define(g: PlangsGraph) {
	const lb = g.plangBuilder;

	lb.define(
		"pl+tcl",
		"Tcl",
		{
			name: "Tcl",
			websites: [
				{
					kind: "wikipedia",
					title: "Tcl",
					href: "https://en.wikipedia.org/wiki/Tcl",
				},
			],
			images: [
				{
					kind: "logo",
					url: "https://upload.wikimedia.org/wikipedia/commons/e/eb/Tcl-powered.svg",
				},
			],
			releases: [{ version: "8.6.14", date: "2024-01-01", kind: "stable" }],
		},
		{
			influences: ["pl+awk", "pl+lisp"],
			licenses: ["lic+bsd-s"],
			paradigms: [
				"para+multi",
				"para+event",
				"para+functional",
				"para+imperative",
				"para+objects",
			],
			people: ["person+john-ousterhout"],
			typeSystems: ["tsys+dynamic"],
		},
	);
}
