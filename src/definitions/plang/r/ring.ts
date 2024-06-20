import type { PlangsGraph } from "../../../entities/plangs_graph";

export const lang_vid = "pl+Ring";

export function define(g: PlangsGraph) {
	const pl = g.v_plang.merge(lang_vid, { name: "Ring" });

	const plb = g.plangBuilder(pl);

	plb.addImages([
		{
			kind: "logo",
			url: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f7/Ringlogo_transparent.png/121px-Ringlogo_transparent.png",
		},
	]);

	plb.addWebsites([
		{
			kind: "wikipedia",
			title: "Ring",
			href: "https://en.wikipedia.org/wiki/Ring_(programming_language)",
		},
		{
			kind: "homepage",
			title: "http://ring-lang.net",
			href: "http://ring-lang.net",
		},
	]);

	plb.addScoping([]);

	plb.addExtensions([".rform", ".rh", ".ring"]);

	plb.addReferences({});

	plb.addPeople([["person+Mahmoud-Samir-Fayed", "designer"]]);

	plb.addLicenses(["license+MIT-License"]);

	plb.addParadigms([
		"para+declarative",
		"para+functional",
		"para+imperative",
		"para+multi-paradigm",
		"para+natural-language",
		"para+object-oriented",
		"para+reflective",
	]);

	plb.addTypeSystems(["tsys+dynamic"]);

	plb.addPlatforms(["platf+Linux", "platf+Windows", "platf+macOS"]);

	plb.addImplementations(["pl+C"]);

	plb.addDialects([]);

	plb.addInfluences([
		"pl+BASIC",
		"pl+C",
		"pl+CSharp",
		"pl+DragonLang",
		"pl+Lua",
		"pl+Python",
		"pl+QML",
		"pl+Ruby",
		"pl+SimpleLang",
		"pl+xBase",
	]);

	plb.addInfluenced(["pl+Python", "pl+QML", "pl+Ruby"]);

	plb.addReleases([
		{
			version: "unknown",
			date: "2016-01-25",
			kind: "first",
		},
		{
			version: "1.20",
			date: "2024-01-01",
			kind: "stable",
		},
	]);
}
