import type { PlangsGraph } from "../../entities/plangs_graph";

export function define(g: PlangsGraph) {
	const lb = g.platformBuilder;

	lb.define("platf+fpga", "FPGA", {
		websites: [
			{
				kind: "wikipedia",
				title: "FPGA",
				href: "https://en.wikipedia.org/wiki/Field_Programmable_Gate_Array",
			},
		],
	});
}
