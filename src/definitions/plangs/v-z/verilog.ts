import type { PlangsGraph } from "../../../entities/plangs_graph";

export function define(g: PlangsGraph) {
	const lb = g.plangBuilder;

	lb.define(
		"pl+verilog",
		"SystemVerilog",
		{
			name: "SystemVerilog",
			websites: [
				{
					kind: "wikipedia",
					title: "Verilog",
					href: "https://en.wikipedia.org/wiki/Verilog",
				},
				{
					kind: "wikipedia",
					title: "SystemVerilog",
					href: "https://en.wikipedia.org/wiki/SystemVerilog",
				},
				{
					kind: "homepage",
					title: "https://ieeexplore.ieee.org/document/10458102",
					href: "https://ieeexplore.ieee.org/document/10458102",
				},
				{
					kind: "wikipedia",
					title: "Verilog-AMS",
					href: "https://en.wikipedia.org/wiki/Verilog-AMS",
				},
			],
			releases: [{ version: "unknown", date: "1800-01-01", kind: "stable" }],
		},
		{
			dialects: ["pl+bluespec--inc.", "pl+verilog"],
			influences: [
				"pl+c",
				"pl+verilog",
				"pl+vhdl",
				"pl+cpp",
				"pl+openvera",
				"pl+java",
				"pl+pascal",
				"pl+ada",
				"pl+fortran",
			],
			paradigms: ["para+structured", "para+objects"],
			people: ["person+prabhu-goel", "person+phil-moorby"],
			typeSystems: ["tsys+static", "tsys+weak"],
		},
	);
}
