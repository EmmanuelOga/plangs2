import type { PlangsGraph } from "../../../entities/plangs_graph";

export function define(g: PlangsGraph) {
	const lb = g.plangBuilder;

	lb.define(
		"pl+actionscript",
		"ActionScript",
		{
			name: "ActionScript",
			websites: [
				{
					kind: "wikipedia",
					title: "ActionScript",
					href: "https://en.wikipedia.org/wiki/ActionScript",
				},
				{
					kind: "homepage",
					title: "adobe.com/devnet/actionscript/",
					href: "https://www.adobe.com/devnet/actionscript/articles/actionscript3_overview.html",
				},
			],
			images: [
				{
					kind: "logo",
					url: "https://upload.wikimedia.org/wikipedia/en/thumb/0/0f/ActionScript_icon.png/121px-ActionScript_icon.png",
				},
			],
			releases: [{ version: "3.0", date: "2006-01-01", kind: "stable" }],
			extensions: [".as"],
		},
		{
			implementations: [
				"pl+adobe-flash-player",
				"pl+adobe-air",
				"pl+apache-flex",
				"pl+scaleform-gfx",
			],
			influences: ["pl+hypertalk", "pl+javascript", "pl+java", "pl+xtalk"],
			paradigms: [
				"para+multi",
				"para+objects",
				"para+prototypes",
				"para+functional",
				"para+imperative",
				"para+scripting",
			],
			people: ["person+gary-grossman"],
			typeSystems: ["tsys+strong", "tsys+static"],
		},
	);
}
