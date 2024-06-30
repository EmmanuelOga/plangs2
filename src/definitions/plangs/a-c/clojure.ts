import type { PlangsGraph } from "../../../entities/plangs_graph";

export function define(g: PlangsGraph) {
	const lb = g.plangBuilder;

	lb.define(
		"pl+clojure",
		"Clojure",
		{
			name: "Clojure",
			websites: [
				{
					kind: "wikipedia",
					title: "Clojure",
					href: "https://en.wikipedia.org/wiki/Clojure",
				},
				{
					kind: "wikipedia",
					title: "Clojure",
					href: "https://en.wikipedia.org/wiki/Clojure_(programming_language)",
				},
			],
			images: [
				{
					kind: "logo",
					url: "https://upload.wikimedia.org/wikipedia/commons/5/5d/Clojure_logo.svg",
				},
			],
			releases: [{ version: "1.11.2", date: "2024-01-01", kind: "stable" }],
			extensions: [".clj", ".cljs", ".cljr", ".cljc", ".cljd", ".edn"],
		},
		{
			influences: [
				"pl+armed-bear-common-lisp",
				"pl+cpp",
				"pl+c-sharp",
				"pl+common-lisp",
				"pl+erlang",
				"pl+haskell",
				"pl+java",
				"pl+ms-visual-c-sharp",
				"pl+ml",
				"pl+prolog",
				"pl+racket",
				"pl+ruby",
				"pl+scheme",
			],
			licenses: ["lic+eclipse-public"],
			paradigms: ["para+multi"],
			people: ["person+rich-hickey"],
			typeSystems: ["tsys+dynamic"],
		},
	);
}
