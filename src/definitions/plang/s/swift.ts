import type { PlangsGraph } from "../../../entities/plangs_graph";

export const lang_vid = "pl+Swift";

export function define(g: PlangsGraph) {
	const pl = g.v_plang.merge(lang_vid, { name: "Swift" });

	const plb = g.plangBuilder(pl);

	plb.addImages([
		{
			kind: "logo",
			url: "https://upload.wikimedia.org/wikipedia/en/thumb/8/86/Swift_%28programing_language%29_logo.png/150px-Swift_%28programing_language%29_logo.png",
		},
	]);

	plb.addWebsites([
		{
			kind: "wikipedia",
			title: "Swift",
			href: "https://en.wikipedia.org/wiki/Swift_(programming_language)",
		},
		{
			kind: "wikipedia",
			title: "Swift",
			href: "https://en.wikipedia.org/wiki/Swift_(parallel_scripting_language)",
		},
		{
			kind: "homepage",
			title: "swift-lang.org",
			href: "http://swift-lang.org",
		},
	]);

	plb.addScoping([]);

	plb.addExtensions([]);

	plb.addReferences({});

	plb.addPeople([]);

	plb.addLicenses(["license+Apache"]);

	plb.addParadigms([
		"para+concurrent",
		"para+dataflow",
		"para+distributed",
		"para+grid",
		"para+scientific-workflow",
		"para+scripting",
	]);

	plb.addTypeSystems(["tsys+strong"]);

	plb.addPlatforms(["platf+Cross-platform", "platf+Java"]);

	plb.addImplementations([]);

	plb.addDialects([]);

	plb.addInfluences(["pl+C", "pl+Cuneiform", "pl+functional-programming"]);

	plb.addInfluenced([
		"pl+ArkTS",
		"pl+CLU",
		"pl+D-programming-language",
		"pl+Lisp",
		"pl+Objective-C",
		"pl+Python",
		"pl+Ruby",
		"pl+Rust",
		"pl+Smalltalk",
		"pl+V",
	]);

	plb.addReleases([
		{
			version: "unknown",
			date: "2007-01-01",
			kind: "first",
		},
		{
			version: "0.96.2",
			date: "2015-08-05",
			kind: "stable",
		},
	]);
}
