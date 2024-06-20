import type { PlangsGraph } from "../../../entities/plangs_graph";

export const lang_vid = "pl+Vala";

export function define(g: PlangsGraph) {
	const pl = g.v_plang.merge(lang_vid, { name: "Vala" });

	const plb = g.plangBuilder(pl);

	plb.addImages([
		{
			kind: "logo",
			url: "https://upload.wikimedia.org/wikipedia/commons/9/92/Vala_Logo.svg",
		},
	]);

	plb.addWebsites([
		{
			kind: "wikipedia",
			title: "Vala",
			href: "https://en.wikipedia.org/wiki/Vala_(programming_language)",
		},
		{
			kind: "homepage",
			title: "vala.dev",
			href: "https://vala.dev",
		},
	]);

	plb.addScoping([]);

	plb.addExtensions([".vala", ".vapi"]);

	plb.addReferences({});

	plb.addPeople([
		["person+Jurg-Billeter", "designer"],
		["person+Raffaele-Sandrini", "designer"],
		["person+Rico-Tzschichholz", "designer"],
	]);

	plb.addLicenses(["license+LGPLv2dot1P"]);

	plb.addParadigms([
		"para+imperative",
		"para+multi-paradigm",
		"para+object-oriented",
		"para+structured",
	]);

	plb.addTypeSystems([
		"tsys+inferred",
		"tsys+static",
		"tsys+strong",
		"tsys+structural",
	]);

	plb.addPlatforms(["platf+Cross-platform", "platf+GLib"]);

	plb.addImplementations([]);

	plb.addDialects([]);

	plb.addInfluences([
		"pl+Boo",
		"pl+C",
		"pl+CPP",
		"pl+CSharp",
		"pl+D",
		"pl+Java",
	]);

	plb.addInfluenced(["pl+Boo", "pl+C", "pl+D-programming-language", "pl+Java"]);

	plb.addReleases([
		{
			version: "unknown",
			date: "2006-01-01",
			kind: "first",
		},
		{
			version: "0.57.0",
			date: "2023-01-01",
			kind: "stable",
		},
	]);
}
