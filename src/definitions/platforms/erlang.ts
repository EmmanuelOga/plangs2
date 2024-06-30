import type { PlangsGraph } from "../../entities/plangs_graph";

export function define(g: PlangsGraph) {
	const lb = g.platformBuilder;

	lb.define("platf+erlang", "Erlang", {
		websites: [
			{
				kind: "wikipedia",
				title: "Erlang",
				href: "https://en.wikipedia.org/wiki/Erlang_(programming_language)",
			},
		],
	});
}
