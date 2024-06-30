import type { PlangsGraph } from "../../entities/plangs_graph";

export function define(g: PlangsGraph) {
	const lb = g.platformBuilder;

	lb.define("platf+glib", "GLib", {
		websites: [
			{
				kind: "wikipedia",
				title: "GLib",
				href: "https://en.wikipedia.org/wiki/GLib",
			},
		],
	});
}
