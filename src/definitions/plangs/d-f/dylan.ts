import type { PlangsGraph } from "../../../entities/plangs_graph";

export function define(g: PlangsGraph) {
	const lb = g.plangBuilder;

	lb.define(
		"pl+dylan",
		"Dylan",
		{
			name: "Dylan",
			websites: [
				{
					kind: "wikipedia",
					title: "Dylan",
					href: "https://en.wikipedia.org/wiki/Dylan_(programming_language)",
				},
				{
					kind: "wikipedia",
					title: "Dylan",
					href: "https://en.wikipedia.org/wiki/Dylan_programming_language",
				},
			],
			images: [
				{
					kind: "logo",
					url: "https://upload.wikimedia.org/wikipedia/en/thumb/2/25/Dylan_logo.png/121px-Dylan_logo.png",
				},
			],
			releases: [{ version: "2022.1", date: "2022-01-01", kind: "stable" }],
		},
		{
			influences: [
				"pl+armed-bear-common-lisp",
				"pl+common-lisp",
				"pl+common-lisp-object-system",
				"pl+algol",
				"pl+scheme",
				"pl+eulisp",
				"pl+oaklisp",
				"pl+smalltalk",
			],
			paradigms: ["para+multi", "para+functional", "para+objects"],
			platforms: ["platf+ia-32", "platf+x86-64", "platf+cross-platform"],
		},
	);
}
