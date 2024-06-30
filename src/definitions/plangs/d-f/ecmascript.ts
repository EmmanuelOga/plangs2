import type { PlangsGraph } from "../../../entities/plangs_graph";

export function define(g: PlangsGraph) {
	const lb = g.plangBuilder;

	lb.define(
		"pl+ecmascript",
		"ECMAScript",
		{
			name: "ECMAScript",
			websites: [
				{
					kind: "wikipedia",
					title: "ECMAScript",
					href: "https://en.wikipedia.org/wiki/ECMAScript",
				},
				{
					kind: "homepage",
					title: "Standards",
					href: "https://www.ecma-international.org/publications-and-standards/standards/",
				},
			],
			images: [
				{
					kind: "logo",
					url: "https://upload.wikimedia.org/wikipedia/commons/c/c3/Crystal_source.svg",
				},
			],
			extensions: [".es"],
			releases: [{ version: "unknown", date: "2023-01-01", kind: "other" }],
		},
		{
			dialects: ["pl+haxe"],
			implementations: [
				"pl+javascript",
				"pl+actionscript",
				"pl+jscript",
				"pl+qtscript",
				"pl+inscript",
				"pl+google-apps-script",
			],
			influences: [
				"pl+self",
				"pl+hypertalk",
				"pl+awk",
				"pl+c",
				"pl+coffeescript",
				"pl+perl",
				"pl+python",
				"pl+java",
				"pl+scheme",
				"pl+xtalk",
			],
			paradigms: [
				"para+multi",
				"para+prototypes",
				"para+functional",
				"para+imperative",
			],
			people: ["person+brendan-eich"],
			typeSystems: ["tsys+weak", "tsys+dynamic"],
		},
	);
}
