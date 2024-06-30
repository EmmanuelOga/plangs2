import type { PlangsGraph } from "../../../entities/plangs_graph";

export function define(g: PlangsGraph) {
	const lb = g.plangBuilder;

	lb.define(
		"pl+pure",
		"Pure",
		{
			name: "Pure",
			websites: [
				{
					kind: "wikipedia",
					title: "Pure",
					href: "https://en.wikipedia.org/wiki/Pure_(programming_language)",
				},
			],
			images: [
				{
					kind: "logo",
					url: "https://upload.wikimedia.org/wikipedia/en/thumb/5/5a/Pure_lang_logo.png/121px-Pure_lang_logo.png",
				},
			],
			releases: [{ version: "0.68", date: "2018-01-01", kind: "stable" }],
		},
		{
			influences: ["pl+q", "pl+haskell", "pl+lisp", "pl+alice", "pl+matlab"],
			licenses: ["lic+lgpl"],
			paradigms: ["para+functional", "para+dec", "para+term"],
			platforms: [
				"platf+cross-platform",
				"platf+bsd",
				"platf+linux",
				"platf+mac",
				"platf+win",
			],
			typeSystems: ["tsys+strong", "tsys+dynamic"],
		},
	);
}
