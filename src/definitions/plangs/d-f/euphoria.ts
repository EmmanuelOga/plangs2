import type { PlangsGraph } from "../../../entities/plangs_graph";

export function define(g: PlangsGraph) {
	const lb = g.plangBuilder;

	lb.define(
		"pl+euphoria",
		"Euphoria",
		{
			name: "Euphoria",
			websites: [
				{
					kind: "wikipedia",
					title: "Euphoria",
					href: "https://en.wikipedia.org/wiki/Euphoria_(programming_language)",
				},
			],
			images: [
				{
					kind: "logo",
					url: "https://upload.wikimedia.org/wikipedia/commons/c/c3/OpenEuphoria_logo.png",
				},
			],
			releases: [{ version: "4.1.0", date: "2021-01-01", kind: "stable" }],
		},
		{
			influences: ["pl+basic"],
			licenses: ["lic+bsd-s"],
			paradigms: ["para+imperative"],
			platforms: [
				"platf+cross-platform",
				"platf+win",
				"platf+linux",
				"platf+mac",
				"platf+bsd",
			],
		},
	);
}
