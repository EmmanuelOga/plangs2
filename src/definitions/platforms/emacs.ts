import type { PlangsGraph } from "../../entities/plangs_graph";

export function define(g: PlangsGraph) {
	const lb = g.platformBuilder;

	lb.define("platf+emacs", "Emacs", {
		websites: [
			{
				kind: "wikipedia",
				title: "Emacs",
				href: "https://en.wikipedia.org/wiki/Emacs",
			},
		],
	});
}
