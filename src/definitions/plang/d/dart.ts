import type { PlangsGraph } from "../../../entities/plangs_graph";

export const lang_vid = "pl+Dart";

export function define(g: PlangsGraph) {
	const pl = g.v_plang.merge(lang_vid, { name: "Dart" });

	const plb = g.plangBuilder(pl);

	plb.addImages([
		{
			kind: "logo",
			url: "https://upload.wikimedia.org/wikipedia/commons/f/fe/Dart_programming_language_logo.svg",
		},
	]);

	plb.addWebsites([
		{
			kind: "wikipedia",
			title: "Dart",
			href: "https://en.wikipedia.org/wiki/Dart_(programming_language)",
		},
		{
			kind: "homepage",
			title: "dart.dev",
			href: "https://dart.dev",
		},
	]);

	plb.addScoping([]);

	plb.addExtensions([".dart"]);

	plb.addReferences({});

	plb.addPeople([["person+Lars-Bak", "designer"]]);

	plb.addLicenses(["license+BSD"]);

	plb.addParadigms([
		"para+functional",
		"para+imperative",
		"para+multi-paradigm",
		"para+object-oriented",
		"para+reflective",
	]);

	plb.addTypeSystems([
		"tsys+inferred",
		"tsys+optional",
		"tsys+static",
		"tsys+strong",
	]);

	plb.addPlatforms(["platf+Cross-platform"]);

	plb.addImplementations(["pl+Flutter"]);

	plb.addDialects([]);

	plb.addInfluences([
		"pl+C",
		"pl+CPP",
		"pl+CSharp",
		"pl+Erlang",
		"pl+Java",
		"pl+JavaScript",
		"pl+Ruby",
		"pl+Smalltalk",
		"pl+Strongtalk",
		"pl+TypeScript",
	]);

	plb.addInfluenced(["pl+Erlang", "pl+JavaScript", "pl+Smalltalk"]);

	plb.addReleases([
		{
			version: "unknown",
			date: "2011-10-10",
			kind: "first",
		},
		{
			version: "3.4.3",
			date: "2024-01-01",
			kind: "stable",
		},
	]);
}
