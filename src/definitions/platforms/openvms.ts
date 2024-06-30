import type { PlangsGraph } from "../../entities/plangs_graph";

export function define(g: PlangsGraph) {
	const lb = g.platformBuilder;

	lb.define("platf+openvms", "OpenVMS", {
		websites: [
			{
				kind: "wikipedia",
				title: "VMS",
				href: "https://en.wikipedia.org/wiki/OpenVMS",
			},
		],
	});
}
