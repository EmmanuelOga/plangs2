import type { PlangsGraph } from "../../../entities/plangs_graph";

export const lang_vid = "pl+Groovy";

export function define(g: PlangsGraph) {
	const pl = g.v_plang.merge(lang_vid, { name: "Groovy" });

	const plb = g.plangBuilder(pl);

	plb.addImages([
		{
			kind: "logo",
			url: "https://upload.wikimedia.org/wikipedia/commons/3/36/Groovy-logo.svg",
		},
	]);

	plb.addWebsites([
		{
			kind: "wikipedia",
			title: "Groovy",
			href: "https://en.wikipedia.org/wiki/Groovy_(programming_language)",
		},
		{
			kind: "wikipedia",
			title: "Groovy",
			href: "https://en.wikipedia.org/wiki/Apache_Groovy",
		},
		{
			kind: "homepage",
			title: "groovy-lang.org",
			href: "https://groovy-lang.org",
		},
	]);

	plb.addScoping([]);

	plb.addExtensions([]);

	plb.addReferences({});

	plb.addPeople([
		["person+Cedric-Champeau", "designer"],
		["person+James-Strachan", "designer"],
		["person+Paul-King", "designer"],
	]);

	plb.addLicenses(["license+Apache-License-2dot0"]);

	plb.addParadigms([
		"para+aspect-oriented",
		"para+functional",
		"para+imperative",
		"para+multi-paradigm",
		"para+object-oriented",
		"para+scripting",
	]);

	plb.addTypeSystems([
		"tsys+duck",
		"tsys+dynamic",
		"tsys+static",
		"tsys+strong",
	]);

	plb.addPlatforms(["platf+Java-SE"]);

	plb.addImplementations(["pl+Gradle", "pl+Grails"]);

	plb.addDialects([]);

	plb.addInfluences([
		"pl+Java",
		"pl+Kotlin",
		"pl+Python",
		"pl+Ruby",
		"pl+Smalltalk",
	]);

	plb.addInfluenced([
		"pl+Java",
		"pl+Kotlin",
		"pl+Objective-C",
		"pl+Ruby",
		"pl+Smalltalk",
		"pl+Xtend",
	]);

	plb.addReleases([
		{
			version: "unknown",
			date: "2003-01-01",
			kind: "first",
		},
		{
			version: "4.0.21",
			date: "2024-01-01",
			kind: "stable",
		},
		{
			version: "4.0.0",
			date: "2021-09-06",
			kind: "preview",
		},
	]);
}
