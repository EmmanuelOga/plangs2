import type { PlangsGraph } from "../../../entities/plangs_graph";

export const lang_vid = "pl+CoffeeScript";

export function define(g: PlangsGraph) {
	const pl = g.v_plang.merge(lang_vid, { name: "CoffeeScript" });

	const plb = g.plangBuilder(pl);

	plb.addImages([
		{
			kind: "logo",
			url: "https://upload.wikimedia.org/wikipedia/commons/d/d3/CoffeeScript-logo.svg",
		},
	]);

	plb.addWebsites([
		{
			kind: "wikipedia",
			title: "CoffeeScript",
			href: "https://en.wikipedia.org/wiki/CoffeeScript",
		},
		{
			kind: "homepage",
			title: "coffeescript.org",
			href: "https://coffeescript.org/",
		},
	]);

	plb.addScoping([]);

	plb.addExtensions([]);

	plb.addReferences({});

	plb.addPeople([["person+Jeremy-Ashkenas", "designer"]]);

	plb.addLicenses(["license+MIT-License"]);

	plb.addParadigms([
		"para+functional",
		"para+imperative",
		"para+multi-paradigm",
		"para+prototype-based",
		"para+scripting",
	]);

	plb.addTypeSystems(["tsys+dynamic"]);

	plb.addPlatforms(["platf+Cross-platform"]);

	plb.addImplementations([]);

	plb.addDialects([]);

	plb.addInfluences(["pl+LiveScript", "pl+MoonScript"]);

	plb.addInfluenced([
		"pl+ECMAScript",
		"pl+JavaScript",
		"pl+LiveScript",
		"pl+Python",
		"pl+Ruby",
	]);

	plb.addReleases([
		{
			version: "unknown",
			date: "2009-12-13",
			kind: "first",
		},
		{
			version: "2.7.0",
			date: "2022-01-01",
			kind: "stable",
		},
	]);
}
