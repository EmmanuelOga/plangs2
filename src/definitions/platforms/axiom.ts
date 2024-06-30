import type { PlangsGraph } from "../../entities/plangs_graph";

export function define(g: PlangsGraph) {
	const lb = g.platformBuilder;

	lb.define("platf+axiom", "Axiom computer algebra system", {
		websites: [
			{
				kind: "wikipedia",
				title: "Axiom computer algebra system",
				href: "https://en.wikipedia.org/wiki/Axiom_(computer_algebra_system)",
			},
		],
	});
}
