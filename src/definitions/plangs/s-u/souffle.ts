import type { PlangsGraph } from "../../../entities/plangs_graph";

export function define(g: PlangsGraph) {
	const lb = g.plangBuilder;

	lb.define("pl+souffle", "Soufflé", {
		name: "Soufflé",
		websites: [
			{
				kind: "wikipedia",
				title: "Soufflé",
				href: "https://en.wikipedia.org/wiki/Souffl%C3%A9_(programming_language)",
			},
		],
	});
}
